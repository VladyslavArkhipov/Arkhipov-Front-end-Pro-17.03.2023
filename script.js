const offers = [];
const maxCoord = 37.5;
const minCoord = 36.0;
const numsAfterPoint = 4;

function offerList() {
  for (let i = 0; i < 25; i++) {
    const lat = (Math.random() * (maxCoord - minCoord) + minCoord).toFixed(
      numsAfterPoint
    );
    const lang = (Math.random() * (maxCoord - minCoord) + minCoord).toFixed(
      numsAfterPoint
    );
    const obj = {
      id: `${i}`,
      name: `${i}`,
      coordinates: [lat, lang],
    };
    offers.push(obj);
  }
}
offerList();
