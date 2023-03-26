AsyncStorage.getItem(
  "restaurants",
  function (inError, inRestaurants) {
    if (inRestaurants === null) {
      inRestaurants = [];
    } else {
      inRestaurants = JSON.parse(inRestaurants);
    }

    for (let i = 0; i < inRestaurants.length; i++) {
      const restaurant = inRestaurants[i];
      if (restaurant.key === item.key) {
        inRestaurants.splice(i, 1);
        break;
      }
    }
    AsyncStorage.setItem(
      "restaurants",
      JSON.stringify(inRestaurants),
      function () {
        setListData(inRestaurants);
        Toast.show({
          text: "Restaurant deleted",
          position: "bottom",
          type: "danger",
          duration: 2000,
        });
      }.bind(this)
    );
  }.bind(this)
);
