import { describe, expect, it } from 'vitest';
import { parseDeepLink } from '../../app/lib/deep-link.js';

describe('parseDeepLink', function() {
  it('reads a bare hash id', function() {
    expect(parseDeepLink({ hash: '#tmve' })).toEqual({
      id: 'tmve',
      compareTo: ''
    });
  });

  it('reads compare-to from a hash query', function() {
    expect(parseDeepLink({ hash: '#mvp?c=mvvm' })).toEqual({
      id: 'mvp',
      compareTo: 'mvvm'
    });
  });

  it('reads compare-to from location.search', function() {
    expect(parseDeepLink({ hash: '#mvp', search: '?c=mvvm' })).toEqual({
      id: 'mvp',
      compareTo: 'mvvm'
    });
  });

  it('prefers the hash query over search', function() {
    expect(parseDeepLink({
      hash: '#mvp?c=mvvm',
      search: '?c=tmve'
    })).toEqual({
      id: 'mvp',
      compareTo: 'mvvm'
    });
  });

  it('returns empty fields when location is empty', function() {
    expect(parseDeepLink({})).toEqual({
      id: '',
      compareTo: ''
    });
  });
});
