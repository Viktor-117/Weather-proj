import clear from 'img/0.png';
import mianClear from 'img/1.png';
import partCloud from 'img/2.png';
import overcast from 'img/3.png';
import fog from 'img/45.png';
import rimeFog from 'img/48.png';
import drizzleLight from 'img/51.png';
import drizzleMid from 'img/53.png';
import drizzleDense from 'img/55.png';
import rainLight from 'img/61.png';
import rainMid from 'img/63.png';
import rainHeavy from 'img/65.png';
import snowSlight from 'img/71.png';
import snowMid from 'img/73.png';
import snowHeavy from 'img/75.png';
import showerSlight from 'img/80.png';
import showerMid from 'img/81.png';
import showerViolent from 'img/82.png';
import thunderstorm from 'img/95.png';
import snowGrains from 'img/77.png';

export default function selectimg(code) {
  if (code === 0) {
    return clear;
  } else if (code === 1) {
    return mianClear;
  } else if (code === 2) {
    return partCloud;
  } else if (code === 3) {
    return overcast;
  } else if (code === 45) {
    return fog;
  } else if (code === 48) {
    return rimeFog;
  } else if (code === 51) {
    return drizzleLight;
  } else if (code === 53) {
    return drizzleMid;
  } else if (code === 55) {
    return drizzleDense;
  } else if (code === 61) {
    return rainLight;
  } else if (code === 63) {
    return rainMid;
  } else if (code === 65) {
    return rainHeavy;
  } else if (code === 71 || code === 85 || code === 86) {
    return snowSlight;
  } else if (code === 73) {
    return snowMid;
  } else if (code === 75) {
    return snowHeavy;
  } else if (code === 77) {
    return snowGrains;
  } else if (code === 80) {
    return showerSlight;
  } else if (code === 81) {
    return showerMid;
  } else if (code === 82) {
    return showerViolent;
  } else if (code === 95 || code === 96 || code === 99) {
    return thunderstorm;
  }
}
