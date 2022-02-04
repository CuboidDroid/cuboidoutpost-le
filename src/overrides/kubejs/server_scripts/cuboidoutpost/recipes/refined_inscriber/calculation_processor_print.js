// priority: 0

onEvent('recipes', e => {

    e.custom({
      "type": "cuboidmod:inscribing",
      "mode": "inscribe",
      "result": {
        "item": "appliedenergistics2:printed_calculation_processor"
      },
      "ingredients": {
        "top": {
          "item": "appliedenergistics2:calculation_processor_press"
        },
        "middle": {
          "item": "appliedenergistics2:purified_certus_quartz_crystal"
        }
      },
      "work_ticks": 40,
      "energy": 2250
    })
  
  })