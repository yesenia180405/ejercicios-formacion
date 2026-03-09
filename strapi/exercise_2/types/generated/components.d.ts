import type { Schema, Struct } from '@strapi/strapi';

export interface DetallesClaseDetallesClase extends Struct.ComponentSchema {
  collectionName: 'components_detalles_clase_detalles_clases';
  info: {
    displayName: 'detalles-clase';
    icon: 'information';
  };
  attributes: {
    aula: Schema.Attribute.String;
    horario: Schema.Attribute.String;
  };
}

export interface DetallesDocumentacionDocumentacion
  extends Struct.ComponentSchema {
  collectionName: 'components_detalles_documentacion_documentacions';
  info: {
    displayName: 'documentacion';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface DetallesDocumentacionGaleriaImagenes
  extends Struct.ComponentSchema {
  collectionName: 'components_detalles_documentacion_galeria_imagenes';
  info: {
    displayName: 'galeria-imagenes';
  };
  attributes: {
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface DetallesDocumentacionLinks extends Struct.ComponentSchema {
  collectionName: 'components_detalles_documentacion_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface DetallesInfoDetallesEvento extends Struct.ComponentSchema {
  collectionName: 'components_detalles_info_detalles_evento_s';
  info: {
    displayName: 'detalles-evento ';
    icon: 'information';
  };
  attributes: {
    Modality: Schema.Attribute.Enumeration<['Virtual', 'In_person']>;
    place: Schema.Attribute.String;
    start_date: Schema.Attribute.Date;
  };
}

export interface ProfesoresInfoDetallesProfesor extends Struct.ComponentSchema {
  collectionName: 'components_profesores_info_detalles_profesors';
  info: {
    displayName: 'detalles-profesor';
    icon: 'information';
  };
  attributes: {
    experience: Schema.Attribute.Integer;
    specialty: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'detalles-clase.detalles-clase': DetallesClaseDetallesClase;
      'detalles-documentacion.documentacion': DetallesDocumentacionDocumentacion;
      'detalles-documentacion.galeria-imagenes': DetallesDocumentacionGaleriaImagenes;
      'detalles-documentacion.links': DetallesDocumentacionLinks;
      'detalles-info.detalles-evento': DetallesInfoDetallesEvento;
      'profesores-info.detalles-profesor': ProfesoresInfoDetallesProfesor;
    }
  }
}
