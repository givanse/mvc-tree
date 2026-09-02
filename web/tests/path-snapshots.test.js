import { describe, expect, it } from 'vitest';
import { DEFAULT_SVG_ENV } from '@svg-layout/environment';
import { computeNodeGeometry } from '@svg-layout/grid-node';
import { generatePathToChild, generateBindingPath } from '@svg-layout/path-factory';
import { loadTreeData } from '../src/data.js';

describe('Stage 0/1 path snapshots', function() {
  it('generatePathToChild TMVE → MVC79', function() {
    var svgenv = {
      paddingT: 8,
      paddingR: 12,
      paddingB: 8,
      paddingL: 12,
      colW: 170 + 12,
      rowH: 64 + 18
    };
    var a = { col: 0, row: 1, x: 0, y: 82 };
    var b = { col: 0, row: 2 };

    expect(generatePathToChild(svgenv, a, b)).toBe(
      'M91 156 v8 h-4 l4 8 l4 -8 h-4'
    );
  });

  it('generateBindingPath MVVM – Data Binding (Stage 0 env)', function() {
    var svgenv = {
      colW: 180,
      rowH: 80,
      paddingT: 2,
      paddingR: 4,
      paddingB: 8,
      paddingL: 16
    };
    var a = { col: 3, row: 14, x: 540, y: 1120 };
    var b = { col: 6, row: 7, x: 1080, y: 560 };

    expect(generateBindingPath(svgenv, a, b)).toBe(
      'M716 1160 h4 v-40 h360 v-480 v-40 h16'
    );
  });

  it('fixture geometry for TMVE matches the snapshot inputs', function() {
    var data = loadTreeData({ showGrid: false });
    var tmve = data.byId.tmve;
    var mvc79 = data.byId.mvc79;
    var geometry = computeNodeGeometry(DEFAULT_SVG_ENV, 0, 1);

    expect(tmve.col).toBe(0);
    expect(tmve.row).toBe(1);
    expect(tmve.x).toBe(geometry.x);
    expect(tmve.y).toBe(geometry.y);
    expect(generatePathToChild(data.svgenv, tmve, mvc79)).toBe(
      'M91 156 v8 h-4 l4 8 l4 -8 h-4'
    );
  });
});
