import { themes } from "./themes";
export const styles = {
    flex: {
        display: 'flex',
    },
  grid: {
    container: {
      display: "grid",
      margin: themes.spacing(),
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gridTemplateRows: "auto",
      gridTemplateAreas:
        " 'header header header header''. main main .''footer footer footer footer'",
    },
    header: {
      /* max-width: 500px; */
      // backgroundColor: "#ccc",
      // justifySelf: "center",
      // width: "100%",
      // maxWidth: "700px",
      gridArea: "header",
    },
    main: {
      gridArea: "main",
    },
    footer: {
      gridArea: "footer",
    },
  },
  card: {
    backgroundColor: themes.color.background,
    padding: themes.spacing(2),
    borderRadius: themes.radius(40),
  },
  nav: {
      container: {
        display: 'flex'
        
      },
      button: {
        child: {
          position: 'absolute',
          left: themes.spacing(2),
          top: themes.spacing(2),
          translate: `transform(-${themes.spacing(4)}, -${themes.spacing(4)})`,
          alignText: 'center'
        },
        container: {
          position: 'relative',
          borderRadius: '50%',
          width: themes.spacing(4),
          height: themes.spacing(4),
          padding: themes.spacing(),
          backgroundColor: themes.color.main,
          cursor: 'pointer',
          
        }
      },
      content: {
        child: {
          position: 'absolute',
          left: themes.spacing(2),
          top: themes.spacing(2),
          translate: `transform(-${themes.spacing(4)}, -${themes.spacing(4)})`,
          alignText: 'center',
        },
        container: {
          position: 'relative',
          height: '100%',

          // width: themes.spacing(4),
          // height: themes.spacing(4),
          padding: themes.spacing(),
          cursor: 'pointer'
        }
    },
  }

};
