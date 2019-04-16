module.exports = {
  succeed,
  fail,
  repair,
  get
};


// Enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.
// The durability of the item is not changed
function succeed(item) {
  if (item.enhancement < 20) {
    return { ...item, enhancement: item.enhancement + 1 };
  }

  return { ...item };
}


/* If the item's enhancement is less than 15,
 ,the durability of the item is decreased by 5.

 If the item's enhancement is 15 or more, 
 the durability of the item is decreased by 10.

 If the item's enhancement level is greater than 16, 
 the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

 */
function fail(item) {
  const copiedItem = { ...item };

  if (item.enhancement >= 15) {
    if (item.enhancement > 16) {
      copiedItem.enhancement -= 1;
    }
    copiedItem.durability = Math.max(0, item.durability - 10);
  } else {
    copiedItem.durability = Math.max(0, item.durability - 5);
  }
  
  return copiedItem;
}

/*  repair(item) method that accepts an item object and
 returns a new item with the durability restored to 100. 
*/
function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
