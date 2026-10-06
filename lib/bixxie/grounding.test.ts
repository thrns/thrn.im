import { describe, expect, test } from 'bun:test';
import { PROFILE } from '@/lib/data';
import { retrievePortfolioContext } from './grounding';

describe('retrievePortfolioContext', () => {
  test('force-includes an exact project match', () => {
    expect(retrievePortfolioContext('Tell me about RepoView')).toContain('[SOURCE: project:RepoView]');
  });

  test('force-includes an exact company match', () => {
    expect(retrievePortfolioContext('Berribot')).toContain('[SOURCE: role:Berribot]');
  });

  test('force-includes an exact technology match', () => {
    expect(retrievePortfolioContext('Kubernetes')).toContain('[SOURCE: stack:Kubernetes]');
  });

  test('force-includes an exact case-study match', () => {
    expect(retrievePortfolioContext('Tracebox')).toContain('[SOURCE: case-study:tracebox]');
  });

  test('contact queries include the canonical profile contact information', () => {
    const context = retrievePortfolioContext('How can I contact you?');
    expect(context).toContain(`[SOURCE: profile:${PROFILE.fullName}]`);
    expect(context).toContain('[SOURCE: contact:email]');
    expect(context).toContain(PROFILE.email);
  });

  test('includes only a short profile summary for unrelated queries', () => {
    const context = retrievePortfolioContext('How does Kubernetes work?');
    expect(context).toContain(`[SOURCE: profile-summary:${PROFILE.fullName}]`);
    expect(context.includes(`[SOURCE: profile:${PROFILE.fullName}]`)).toBe(false);
  });

  test('includes the full profile for profile/about queries', () => {
    const context = retrievePortfolioContext('Tell me about yourself');
    expect(context).toContain(`[SOURCE: profile:${PROFILE.fullName}]`);
  });

  test('returns no more than seven sources', () => {
    const context = retrievePortfolioContext('Berribot Hyr Pocketlink RKGT Tekkscope ThirdSlate Tracebox Python');
    expect(context.match(/\[SOURCE: /g)?.length ?? 0).toBeLessThanOrEqual(7);
  });

  test('keeps serialized context at or below 10,000 characters', () => {
    const context = retrievePortfolioContext('Berribot Hyr Pocketlink RKGT Tekkscope ThirdSlate Tracebox Python');
    expect(context.length).toBeLessThanOrEqual(10_000);
  });
});
