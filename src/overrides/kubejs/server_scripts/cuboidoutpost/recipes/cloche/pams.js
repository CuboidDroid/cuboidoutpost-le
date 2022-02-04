// priority: 0

onEvent('recipes', e => {

  const cloche = (crop, time, amount) => {
    e.custom({
      "type":"immersiveengineering:cloche",
      "results": [
        { "item": "pamhc2crops:" + crop + "item", "count": amount }
      ],
      "input": { "item":"pamhc2crops:" + crop + "seeditem" },
      "soil": { "item":"minecraft:dirt" },
      "time": time,
      "render": {
        "type":"crop",
        "block":"pamhc2crops:pam" + crop + "crop"
      }
    })
  }

  // - A -
  cloche("agave", 600, 2)
  cloche("amaranth", 600, 2)
  cloche("arrowroot", 600, 2)
  cloche("artichoke", 600, 2)
  cloche("asparagus", 600, 2)
  // - B -
  cloche("barley", 600, 2)
  cloche("bean", 600, 2)
  cloche("bellpepper", 600, 2)
  cloche("blackberry", 600, 2)
  cloche("blueberry", 600, 2)
  cloche("broccoli", 600, 2)
  cloche("brusselsprout", 600, 2)
  // - C -
  cloche("cabbage", 600, 2)
  cloche("cactusfruit", 600, 2)
  cloche("candleberry", 600, 2)
  cloche("cantaloupe", 600, 2)
  cloche("cassava", 600, 2)
  cloche("cauliflower", 600, 2)
  cloche("celery", 600, 2)
  cloche("chickpea", 600, 2)
  cloche("chilipepper", 600, 2)
  cloche("coffeebean", 600, 2)
  cloche("corn", 600, 2)
  cloche("cotton", 600, 2)
  cloche("cranberry", 600, 2)
  cloche("cucumber", 600, 2)
  // - D -
  // - E -
  cloche("eggplant", 600, 2)
  cloche("elderberry", 600, 2)
  // - F -
  cloche("flax", 600, 2)
  // - G - 
  cloche("garlic", 600, 2)
  cloche("ginger", 600, 2)
  cloche("grape", 600, 2)
  cloche("greengrape", 600, 2)
  // - H -
  cloche("huckleberry", 600, 2)
  // - I -
  // - J -
  cloche("jicama", 600, 2)
  cloche("juniperberry", 600, 2)
  cloche("jute", 600, 2)
  // - K -
  cloche("kale", 600, 2)
  cloche("kenaf", 600, 2)
  cloche("kiwi", 600, 2)
  cloche("kohlrabi", 600, 2)
  // - L -
  cloche("leek", 600, 2)
  cloche("lentil", 600, 2)
  cloche("lettuce", 600, 2)
  // - M -
  cloche("millet", 600, 2)
  cloche("mulberry", 600, 2)
  cloche("mustardseeds", 600, 2)
  // - N -
  // - O -
  cloche("oats", 600, 2)
  cloche("okra", 600, 2)
  cloche("onion", 600, 2)
  // - P -
  cloche("parsnip", 600, 2)
  cloche("peanut", 600, 2)
  cloche("peas", 600, 2)
  cloche("pineapple", 600, 2)
  // - Q - 
  cloche("quinoa", 600, 2)
  // - R -
  cloche("radish", 600, 2)
  cloche("raspberry", 600, 2)
  cloche("rhubarb", 600, 2)
  cloche("rice", 600, 2)
  cloche("rutabaga", 600, 2)
  cloche("rye", 600, 2)
  // - S -
  cloche("scallion", 600, 2)
  cloche("sesameseeds", 600, 2)
  cloche("sisal", 600, 2)
  cloche("soybean", 600, 2)
  cloche("spiceleaf", 600, 2)
  cloche("spinach", 600, 2)
  cloche("strawberry", 600, 2)
  cloche("sweetpotato", 600, 2)
  // - T -
  cloche("taro", 600, 2)
  cloche("tealeaf", 600, 2)
  cloche("tomatillo", 600, 2)
  cloche("tomato", 600, 2)
  cloche("turnip", 600, 2)
  // - U -
  // - V -
  // - W -
  cloche("waterchestnut", 600, 2)
  cloche("whitemushroom", 600, 2)
  cloche("wintersquash", 600, 2)
  // - X -
  // - Y -
  // - Z -
  cloche("zucchini", 600, 2)

})
