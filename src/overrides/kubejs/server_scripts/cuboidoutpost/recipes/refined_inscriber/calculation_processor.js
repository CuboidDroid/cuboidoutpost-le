// priority: 0

onEvent('recipes', e => {

    e.custom({
      "type": "cuboidmod:inscribing",
      "mode": "press",
      "result": {
        "item": "appliedenergistics2:calculation_processor"
      },
      "ingredients": {
        "top": {
          "item": "appliedenergistics2:printed_calculation_processor"
        },
        "middle": {
          "tag": "forge:dusts/redstone"
        },
        "bottom": {
          "item": "appliedenergistics2:printed_silicon"
        }
      },
      "work_ticks": 40,
      "energy": 2250
    })
  
  })