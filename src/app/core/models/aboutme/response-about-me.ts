export interface ResponseAboutMe {
  datos: Datos;
}

export interface Datos {
  title:      string;
  dateUpdate: string;
  dateCreate: string;
  body:       Body;
  version:    number;
}

export interface Body {
  principal:      Principal;
  stack:          Stack;
  presentaciones: Playlist;
  playlist:       Playlist;
  secodary:       Playlist;
}

export interface Playlist {
  title: string;
  items: string[];
}

export interface Principal {
  secodaryBody:  string;
  principalBody: string;
  title:         string;
}

export interface Stack {
  hardware: Hardware;
  software: Playlist;
  title:    string;
}

export interface Hardware {
  title: string;
  items: Items;
}

export interface Items {
  perifericos: Perifericos;
  desktop:     Playlist;
  laptop:      string;
}

export interface Perifericos {
  Micrófono:   string;
  Auriculares: string;
  Teclado:     string;
  Monitor:     string;
}
