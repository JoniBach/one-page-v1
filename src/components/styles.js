import { themes } from "./themes";
export const styles = {
  flex: {
    display: "flex",
  },
  grid: {
    container: {
      display: "grid",
      margin: themes.spacing(),
      gridTemplateColumns: "1fr 10fr 1fr",
      gridTemplateRows: "auto",
      gridTemplateAreas:
        " 'header header header''. main .''footer footer footer'",
    },
    header: {
      /* max-width: 500px; */
      // backgroundColor: "#ccc",
      // justifySelf: "center",
      // width: "100%",
      // maxWidth: "700px",
      gridArea: "header",
      // maxWidth: '900px',

    },
    main: {
      gridArea: "main",
      maxWidth: '900px',
      // minWidth: '',
      alignSelf: 'center',
      justifySelf: "center",

      // justifyContent: 'center',

    },
    footer: {
      gridArea: "footer",
      // maxWidth: '900px',

    },
  },
  card: {
    overflow: "hidden",
    marginBottom: themes.spacing(2),
    backgroundColor: themes.color.background,
    padding: themes.spacing(2),
    borderRadius: themes.radius(),
    border: "1px #333 solid",
    boxShadow:
      "0 5px 5px rgba(0,0,0,0.4), 0 2px 2px rgba(0,0,0,0.5), 0 8px 8px rgba(0,0,0,0.2)",
  },
  nav: {
    container: {
      display: "flex",
    },
    button: {
      child: {
        position: "absolute",
        fontSize: 30,
        top: "50%",
        left: "50%",
        // left: themes.spacing(2),
        // top: themes.spacing(2),
        // transform: `translate(-${themes.spacing(2)}, -${themes.spacing(2)})`,
        transform: `translate(-50%, -50%)`,
        alignText: "center",
      },
      container: {
        position: "relative",
        borderRadius: "50%",
        width: themes.spacing(4),
        height: themes.spacing(4),
        padding: themes.spacing(),
        backgroundColor: themes.color.main,
        cursor: "pointer",
        boxShadow: "inset 0 0 10px #000000",
        border: "solid 1px #777",
      },
    },
    content: {
      child: {
        position: "absolute",
        left: themes.spacing(2),
        top: themes.spacing(2),
        translate: `transform(-${themes.spacing(4)}, -${themes.spacing(4)})`,
        alignText: "center",
      },
      container: {
        position: "relative",
        height: "100%",

        // width: themes.spacing(4),
        // height: themes.spacing(4),
        padding: themes.spacing(),
        cursor: "pointer",
      },
    },
  },
  halo: {
    img: {
      borderRadius: themes.radius(),
      width: "100%",
    },
    txt: {
      marginLeft: themes.spacing(2),
      marginBottom: themes.spacing(2),
      marginRight: themes.spacing(2),
      marginTop: themes.spacing(),
    },
  },
};
