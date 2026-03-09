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
      'detalles-info.detalles-evento': DetallesInfoDetallesEvento;
      'profesores-info.detalles-profesor': ProfesoresInfoDetallesProfesor;
    }
  }
}
