AsyncStorage.getItem(
  "restaurants",
  function (inError, inRestaurants) {
    if (inRestaurants === null) {
      inRestaurants = [];
    } else {
      inRestaurants = JSON.parse(inRestaurants);
    }
    // Now filter them based on selected criteria, if any.
    filteredRestaurants = [];
    for (const restaurant of inRestaurants) {
      let passTests = true;
      // Filter on cuisine.
      if (this.state.cuisine !== "") {
        if (Object.keys(this.state.cuisine).length > 0) {
          if (restaurant.cuisine !== this.state.cuisine) {
            passTests = false;
          }
        }
      }
      // Filter on price.
      if (this.state.price !== "") {
        if (restaurant.price > this.state.price) {
          passTests = false;
        }
      }
      // Filter on rating.
      if (this.state.rating !== "") {
        if (restaurant.rating < this.state.rating) {
          passTests = false;
        }
      }
      // Filter on delivery.
      if (this.state.delivery !== "") {
        if (restaurant.delivery !== this.state.delivery) {
          passTests = false;
        }
      }
      // The case where there are no selected criteria.
      if (
        this.state.cuisine.length === 0 &&
        this.state.price === "" &&
        this.state.rating === "" &&
        this.state.delivery === ""
      ) {
        passTests = true;
      }
      // Yep, this one meets the criteria, add it.
      if (passTests) {
        filteredRestaurants.push(restaurant);
      }
    }
    // If there were no matches, we can't go on.
    if (filteredRestaurants.length === 0) {
      Alert.alert(
        "Well, that's an easy choice",
        "None of your restaurants match these criteria. Maybe " +
          "try loosening them up a bit?",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      // We've got at least one, go to the next screen.
      navigation.navigate("ChoiceScreen");
    }
  }.bind(this)
);
