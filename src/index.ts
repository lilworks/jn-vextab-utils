
export const Greeter = (name: string) => `Hello ${name}`;

export const JnSelectionElementToVextab = (xy: any) => {
  return { x: xy.x, y: xy.y };
};

export const JnSelectionToVextab = (xys: any) => {
  const s = [];
  xys.forEach(xy => {
    s.push(JnSelectionElementToVextab(xy));
  });
  return s;
};
export const VextabSelectionToString = (vxs: any) => {
  const a = [];
  vxs.forEach(vx => {
    a.push(vx.x + '/' + vx.y);
  });
  return a.join(' ');
};
