import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6),
        
    },
    icon:{
        marginRight: '20px',
    },
    button:{
       marginTop: '40px',
    },
    button1: {
       marginRight: '15px',
    },
    cardGrid: {
       padding: '20px 0',
       marginLeft: '20px',
       marginRight: '20px',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        
    },
    cardMedia: {
        paddingTop: '56.25%'   //16:9
    },
    cardContent: {
         flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0',
    }
}));
export default useStyles;