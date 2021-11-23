/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../graphql/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  Role: "ADMIN" | "USER"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Edge: { // root type
    cursor?: string | null; // String
    node?: NexusGenRootTypes['Link'] | null; // Link
  }
  Link: { // root type
    category?: string | null; // String
    description?: string | null; // String
    id?: string | null; // String
    imageUrl?: string | null; // String
    title?: string | null; // String
    url?: string | null; // String
  }
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage?: boolean | null; // Boolean
  }
  Query: {};
  Response: { // root type
    edges?: Array<NexusGenRootTypes['Edge'] | null> | null; // [Edge]
    pageInfo?: NexusGenRootTypes['PageInfo'] | null; // PageInfo
  }
  User: { // root type
    email?: string | null; // String
    id?: string | null; // String
    image?: string | null; // String
    name?: string | null; // String
    role?: NexusGenEnums['Role'] | null; // Role
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Edge: { // field return type
    cursor: string | null; // String
    node: NexusGenRootTypes['Link'] | null; // Link
  }
  Link: { // field return type
    category: string | null; // String
    description: string | null; // String
    id: string | null; // String
    imageUrl: string | null; // String
    title: string | null; // String
    url: string | null; // String
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean | null; // Boolean
  }
  Query: { // field return type
    links: NexusGenRootTypes['Response'] | null; // Response
  }
  Response: { // field return type
    edges: Array<NexusGenRootTypes['Edge'] | null> | null; // [Edge]
    pageInfo: NexusGenRootTypes['PageInfo'] | null; // PageInfo
  }
  User: { // field return type
    bookmarks: Array<NexusGenRootTypes['Link'] | null> | null; // [Link]
    email: string | null; // String
    id: string | null; // String
    image: string | null; // String
    name: string | null; // String
    role: NexusGenEnums['Role'] | null; // Role
  }
}

export interface NexusGenFieldTypeNames {
  Edge: { // field return type name
    cursor: 'String'
    node: 'Link'
  }
  Link: { // field return type name
    category: 'String'
    description: 'String'
    id: 'String'
    imageUrl: 'String'
    title: 'String'
    url: 'String'
    users: 'User'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
  }
  Query: { // field return type name
    links: 'Response'
  }
  Response: { // field return type name
    edges: 'Edge'
    pageInfo: 'PageInfo'
  }
  User: { // field return type name
    bookmarks: 'Link'
    email: 'String'
    id: 'String'
    image: 'String'
    name: 'String'
    role: 'Role'
  }
}

export interface NexusGenArgTypes {
  Query: {
    links: { // args
      after?: string | null; // String
      first?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}