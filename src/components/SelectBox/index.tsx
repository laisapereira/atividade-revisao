import React from 'react'

export default function SelectBox() {
  return (
    <select name="select" defaultValue="DEFAULT">
      <option value="mega-sena">MEGA-SENA</option>
      <option value="quina">QUINA</option>
      <option value="lotofácil">LOTOFÁCIL</option>
      <option value="lotomania">LOTOMANIA</option>
      <option value="timemania">TIMEMANIA</option>
      <option value="dia da sorte">DIA DA SORTE</option>
    </select>
  )
}
