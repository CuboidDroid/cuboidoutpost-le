// priority: 0

onEvent('recipes', e => {

    e.custom({
      "type": "cuboidmod:inscribing",
      "mode": "inscribe",
      "result": {
        "item": "appliedenergistics2:printed_logic_processor"
      },
      "ingredients": {
        "top": {
          "item": "appliedenergistics2:logic_processor_press"
        },
        "middle": {
          "tag": "forge:ingots/gold"
        }
      },
      "work_ticks": 40,
      "energy": 2250
    })
  
  })