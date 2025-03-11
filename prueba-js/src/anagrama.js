export default (word1, word2) => {
  // Función para quitar los acentos
  const removeAccents = (word) => {
    return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  /* Normalizamos las palabras: eliminamos los caracteres no alfabéticos, los espacios, quitamos los acentos, 
   * las convertimos a minúsculas*/
  const normalize = (word) => {
    return removeAccents(word.replace(/[^a-zA-ZáéíóúÁÉÍÓÚ\s]/g, '').replace(/\s+/g, '').toLowerCase()).split('').sort().join('');
  };

  // Comparamos las palabras normalizadas
  return normalize(word1) === normalize(word2);
};
