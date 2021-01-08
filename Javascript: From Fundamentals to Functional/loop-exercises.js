_ = {};

_.each = function(list, callback) {
  if (Array.isArray(list)) {
    for (item of list) {
      callback(item);
    }
  } else {
    for (key in list) {
      callback(collection[item]);
    }
  }
}

// with index

_.each = function(list, callback) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      callback(item, i, list);
    }
  } else {
    for (item in collection) {
      callback(list[key], key, list);
    }
  }
}


_ = {};

_.map = function(list, callback) {
  const ra = [];
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      ra.push(callback(list[i], i, list))
    }
  } else {
    for (property in list) {
      ra.push(callback(list[property], property, list));
    }
  }
  return ra;
}

// with each
_.map = function(list, callback) {
  const ra = [];
  _.each(list, (item) => {
    ra.push(callback(item));
  })
  return ra;
}

const weapons = ['candlestick', 'lead pipe', 'rope'];

const makeBroken = function(item) {
  return `broken ${item}`;
}

const brokenWeapons = _.map(weapons, makeBroken);