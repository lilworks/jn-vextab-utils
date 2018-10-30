import { Greeter } from '../index';
import { JnSelectionElementToVextab } from '../index';
import { VextabSelectionToString } from '../index';

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});

var xy = {
  octave: 3,
  openstring: null,
  selected: true,
  tone: {id: 7, digit: 6, playerName: "F#", defaultColor: "#0FAFC0", color: "#0FAFC0"},
  x: 4,
  y: 4
}

var input = [
  {x:1,y:3},
  {x:2,y:5}
];
