export default (json) => {
  // Función para capitalizar
  const capitalizar = (str) =>
    str ? str.toLowerCase().replace(/(^|\s)(\p{L})/gu, (m) => m.toUpperCase()) : "";

  // Procesar los datos
  const personasProcesadas = json.map((persona) => {
    const nombreCompleto = [persona.nombre, persona.apellido]
    .map(capitalizar)
      .concat(persona.apellido2 ? capitalizar(persona.apellido2) : [])
      .join(" ");

    return { ...persona, nombreCompleto };
  });

  return `
    <ul>
      ${personasProcesadas.map(p => `<li>${p.nombreCompleto}</li>`).join('')}
    </ul>
  `;
};
