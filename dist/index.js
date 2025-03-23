const a = () => "########-####-####-####-############".replaceAll(
  /#/g,
  () => Math.random().toString(16)[2]
), c = (r = 10) => {
  const o = Math.ceil(r / 2), t = new Uint8Array(o);
  crypto.getRandomValues(t);
  let n = "";
  for (let e = 0; e < t.length; e++)
    n += t[e].toString(16).padStart(2, "0");
  return n.slice(0, r);
};
export {
  c as hexId,
  a as uuidv4
};
