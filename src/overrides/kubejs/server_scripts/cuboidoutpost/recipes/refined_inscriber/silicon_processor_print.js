// priority: 0

onEvent('recipes', e => {

    e.custom({
      "type": "cuboidmod:inscribing",
      "mode": "inscribe",
      "result": {
        "item": "appliedenergistics2:printed_silicon"
      },
      "ingredients": {
        "top": {
          "item": "appliedenergistics2:silicon_press"
        },
        "middle": {
          "tag": "appliedenergistics2:silicon"
        }
      },
      "work_ticks": 40,
      "energy": 2250
    })
  
  })