import CatalogInterface from 'dsep-beckn-schema/schemas/Catalog.interface';
import ContextInterface from 'dsep-beckn-schema/schemas/Context.interface';
import ErrorInterface from 'dsep-beckn-schema/schemas/Error.interface';

export interface OnSearchDTO {
  context: ContextInterface;
  message?: {
    catalog: CatalogInterface;
  };
  error?: ErrorInterface;
}
