// priority: 0

onEvent('recipes', e => {

    e.shapeless('minecraft:glass_pane', ['create:tiled_glass_pane']);
    e.shapeless('minecraft:glass_pane', ['create:framed_glass_pane']);
    e.shapeless('minecraft:glass_pane', ['create:horizontal_framed_glass_pane']);
    e.shapeless('minecraft:glass_pane', ['create:vertical_framed_glass_pane']);

})