// priority: 0

onEvent('recipes', e => {
  // remove silkworm drop from leaves
  e.remove({id: 'exnihilosequentia:sieve/ens_silkworm'})
})
