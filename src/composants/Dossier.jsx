import './Dossier.scss'; 
import React from "react";
import { IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CouvertureBase from "../images/couverture.webp";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function Dossier({id, nom, couleur, datemodif, couverture}) {
  const [Ancrage, setAncrage] = React.useState(null);

  const gererClique = (event) => {
    setAncrage(event.currentTarget);
  };

  const gererFermer = () => {
    setAncrage(null);
  };

  return (
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton className="deplacer" aria-label="déplacer" disableRipple={true}>
          <SortIcon />
        </IconButton>
        <img src={ couverture=='' ? CouvertureBase : couverture} alt={nom}/>
      </div>
      <div className="info">
        <h2>{nom}</h2>
        <p>Modifié : {formaterDate(datemodif)}</p>
      </div>
      <IconButton 
      className="modifier" 
      aria-label="modifier" 
      size="small"
      aria-controls="simple-menu"
      aria-haspopup="true"
      onClick={gererClique}
      >
      <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={Ancrage}
        keepMounted
        open={Boolean(Ancrage)}
        onClose={gererFermer}
      >
        <MenuItem onClick={gererFermer}>Modifier</MenuItem>
        <MenuItem onClick={gererFermer}>Supprimer</MenuItem>
      </Menu>
    </article>
  );
}

/**
 * Formate les objets date de Firestore et retourne une chaîne de caractères
 * @param {Object} d Objet date retourné par Firestore
 * @returns String date formatée en français
 */
function formaterDate(d) {
  const dateJs = d ? new Date(d.seconds*1000) : new Date();
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${dateJs.getDate()} ${mois[dateJs.getMonth()]} ${dateJs.getFullYear()}`;
}