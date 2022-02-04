// priority: 0

onEvent('recipes', e => {

    e.custom({
      "type": "cuboidmod:inscribing",
      "mode": "inscribe",
      "result": {
        "item": "appliedenergistics2:printed_engineering_processor"
      },
      "ingredients": {
        "top": {
          "item": "appliedenergistics2:engineering_processor_press"
        },
        "middle": {
          "tag": "forge:gems/diamond"
        }
      },
      "work_ticks": 40,
      "energy": 2250
    })
  
  })