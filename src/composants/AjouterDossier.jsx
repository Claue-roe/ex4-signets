import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import { green, red } from '@material-ui/core/colors';
import {withStyles, makeStyles} from '@material-ui/core/styles';

const BoutonVert = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
  }))(Button);

  const BoutonRouge = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
      '&:hover': {
        backgroundColor: red[700],
      },
    },
  }))(Button);


  const EspaceBouton = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const classMargin = EspaceBouton();
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#537169');

  function viderChamps() {
    setNom('');
    setCouverture('');
    setCouleur('#537169');
  }

  return (
    <div className="AjouterDossier">
      <Dialog 
      open={ouvert} 
      onClose={()=>setOuvert(false)} 
      aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
            defaultValue={nom}
            margin="normal"
          />
          <TextField
            margin="dense"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
            defaultValue={couverture}
          />
          <TwitterPicker 
            width="100%" 
            colors={['#ABDEE6','#CBAACB','#FFFFB5','#FFCCB6','#F3B0C3','#CCE2CB']}
            triangle="hide" 
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
            color={couleur}
          />
        </DialogContent>
        <DialogActions className={classMargin.root}>
          <BoutonRouge 
          onClick={()=>{setOuvert(false); viderChamps()}} 
          color="secondary"
          >
            Annuler
          </BoutonRouge>
          <BoutonVert 
          onClick={() => {nom !== '' && gererAjout(nom, couverture, couleur); viderChamps(); }} 
          color="secondary"
          >
            Ajouter
          </BoutonVert>
        </DialogActions>
      </Dialog>
    </div>
  );
}