const labels = {
  home: {
    titulo: "COESyP",
    subTitulo: "¡Bienvenido a COESyP!",
  },
  notFound: {
    title: "404 - No encontrado",
    description: "Parece que el enlace solicitado no existe",
    buttonLabel: "Regresar",
  },
  footer: {
    company: {
      href: "https://www.coesyp.com/",
      name: "COESyP México, Todos los derechos reservados",
    },
    links: [
      { href: "https://www.coesyp.com/", name: "COESyP" },
      { href: "https://www.facebook.com/COESyP", name: "Acerca de" },
    ],
    fromDash: false,
  },
};

const label = (page, key = "") => {
  if (!Object.hasOwnProperty.call(labels, page)) {
    return "Desconocido";
  }

  const objectPage = labels[page];
  const elementType = Object.prototype.toString.call(objectPage);

  if (elementType === "[object String]") {
    return objectPage;
  }

  if (elementType === "[object Object]" && key === "") {
    return objectPage;
  }

  if (!Object.hasOwnProperty.call(objectPage, key)) {
    return "Desconocido";
  }
  const value = objectPage[key];
  return value;
};

export default label;
