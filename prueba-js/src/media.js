export default (json) => {
  // Calcular la media de edad
  const totalEdad = json.reduce((sum, persona) => sum + persona.edad, 0);
  const mediaEdad = (totalEdad / json.length).toFixed(2);

  return `
    <h3>Media de Edad: ${mediaEdad} años</h3>
  `;
};
