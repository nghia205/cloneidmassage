import * as migration_20250809_031811 from './20250809_031811';

export const migrations = [
  {
    up: migration_20250809_031811.up,
    down: migration_20250809_031811.down,
    name: '20250809_031811'
  },
];
