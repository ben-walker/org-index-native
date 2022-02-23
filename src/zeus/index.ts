/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = never

export type ValueTypes = {
    ["AggregateOrganization"]: AliasType<{
	_count?:ValueTypes["OrganizationCountAggregate"],
	_max?:ValueTypes["OrganizationMaxAggregate"],
	_min?:ValueTypes["OrganizationMinAggregate"],
		__typename?: boolean
}>;
	["AggregateUser"]: AliasType<{
	_count?:ValueTypes["UserCountAggregate"],
	_max?:ValueTypes["UserMaxAggregate"],
	_min?:ValueTypes["UserMinAggregate"],
		__typename?: boolean
}>;
	/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
["DateTime"]:unknown;
	["DateTimeFilter"]: {
	equals?:ValueTypes["DateTime"] | null,
	gt?:ValueTypes["DateTime"] | null,
	gte?:ValueTypes["DateTime"] | null,
	in?:ValueTypes["DateTime"][],
	lt?:ValueTypes["DateTime"] | null,
	lte?:ValueTypes["DateTime"] | null,
	not?:ValueTypes["NestedDateTimeFilter"] | null,
	notIn?:ValueTypes["DateTime"][]
};
	["DateTimeNullableFilter"]: {
	equals?:ValueTypes["DateTime"] | null,
	gt?:ValueTypes["DateTime"] | null,
	gte?:ValueTypes["DateTime"] | null,
	in?:ValueTypes["DateTime"][],
	lt?:ValueTypes["DateTime"] | null,
	lte?:ValueTypes["DateTime"] | null,
	not?:ValueTypes["NestedDateTimeNullableFilter"] | null,
	notIn?:ValueTypes["DateTime"][]
};
	["DateTimeNullableWithAggregatesFilter"]: {
	_count?:ValueTypes["NestedIntNullableFilter"] | null,
	_max?:ValueTypes["NestedDateTimeNullableFilter"] | null,
	_min?:ValueTypes["NestedDateTimeNullableFilter"] | null,
	equals?:ValueTypes["DateTime"] | null,
	gt?:ValueTypes["DateTime"] | null,
	gte?:ValueTypes["DateTime"] | null,
	in?:ValueTypes["DateTime"][],
	lt?:ValueTypes["DateTime"] | null,
	lte?:ValueTypes["DateTime"] | null,
	not?:ValueTypes["NestedDateTimeNullableWithAggregatesFilter"] | null,
	notIn?:ValueTypes["DateTime"][]
};
	["DateTimeWithAggregatesFilter"]: {
	_count?:ValueTypes["NestedIntFilter"] | null,
	_max?:ValueTypes["NestedDateTimeFilter"] | null,
	_min?:ValueTypes["NestedDateTimeFilter"] | null,
	equals?:ValueTypes["DateTime"] | null,
	gt?:ValueTypes["DateTime"] | null,
	gte?:ValueTypes["DateTime"] | null,
	in?:ValueTypes["DateTime"][],
	lt?:ValueTypes["DateTime"] | null,
	lte?:ValueTypes["DateTime"] | null,
	not?:ValueTypes["NestedDateTimeWithAggregatesFilter"] | null,
	notIn?:ValueTypes["DateTime"][]
};
	["NestedDateTimeFilter"]: {
	equals?:ValueTypes["DateTime"] | null,
	gt?:ValueTypes["DateTime"] | null,
	gte?:ValueTypes["DateTime"] | null,
	in?:ValueTypes["DateTime"][],
	lt?:ValueTypes["DateTime"] | null,
	lte?:ValueTypes["DateTime"] | null,
	not?:ValueTypes["NestedDateTimeFilter"] | null,
	notIn?:ValueTypes["DateTime"][]
};
	["NestedDateTimeNullableFilter"]: {
	equals?:ValueTypes["DateTime"] | null,
	gt?:ValueTypes["DateTime"] | null,
	gte?:ValueTypes["DateTime"] | null,
	in?:ValueTypes["DateTime"][],
	lt?:ValueTypes["DateTime"] | null,
	lte?:ValueTypes["DateTime"] | null,
	not?:ValueTypes["NestedDateTimeNullableFilter"] | null,
	notIn?:ValueTypes["DateTime"][]
};
	["NestedDateTimeNullableWithAggregatesFilter"]: {
	_count?:ValueTypes["NestedIntNullableFilter"] | null,
	_max?:ValueTypes["NestedDateTimeNullableFilter"] | null,
	_min?:ValueTypes["NestedDateTimeNullableFilter"] | null,
	equals?:ValueTypes["DateTime"] | null,
	gt?:ValueTypes["DateTime"] | null,
	gte?:ValueTypes["DateTime"] | null,
	in?:ValueTypes["DateTime"][],
	lt?:ValueTypes["DateTime"] | null,
	lte?:ValueTypes["DateTime"] | null,
	not?:ValueTypes["NestedDateTimeNullableWithAggregatesFilter"] | null,
	notIn?:ValueTypes["DateTime"][]
};
	["NestedDateTimeWithAggregatesFilter"]: {
	_count?:ValueTypes["NestedIntFilter"] | null,
	_max?:ValueTypes["NestedDateTimeFilter"] | null,
	_min?:ValueTypes["NestedDateTimeFilter"] | null,
	equals?:ValueTypes["DateTime"] | null,
	gt?:ValueTypes["DateTime"] | null,
	gte?:ValueTypes["DateTime"] | null,
	in?:ValueTypes["DateTime"][],
	lt?:ValueTypes["DateTime"] | null,
	lte?:ValueTypes["DateTime"] | null,
	not?:ValueTypes["NestedDateTimeWithAggregatesFilter"] | null,
	notIn?:ValueTypes["DateTime"][]
};
	["NestedIntFilter"]: {
	equals?:number | null,
	gt?:number | null,
	gte?:number | null,
	in?:number[],
	lt?:number | null,
	lte?:number | null,
	not?:ValueTypes["NestedIntFilter"] | null,
	notIn?:number[]
};
	["NestedIntNullableFilter"]: {
	equals?:number | null,
	gt?:number | null,
	gte?:number | null,
	in?:number[],
	lt?:number | null,
	lte?:number | null,
	not?:ValueTypes["NestedIntNullableFilter"] | null,
	notIn?:number[]
};
	["NestedStringFilter"]: {
	contains?:string | null,
	endsWith?:string | null,
	equals?:string | null,
	gt?:string | null,
	gte?:string | null,
	in?:string[],
	lt?:string | null,
	lte?:string | null,
	not?:ValueTypes["NestedStringFilter"] | null,
	notIn?:string[],
	startsWith?:string | null
};
	["NestedStringWithAggregatesFilter"]: {
	_count?:ValueTypes["NestedIntFilter"] | null,
	_max?:ValueTypes["NestedStringFilter"] | null,
	_min?:ValueTypes["NestedStringFilter"] | null,
	contains?:string | null,
	endsWith?:string | null,
	equals?:string | null,
	gt?:string | null,
	gte?:string | null,
	in?:string[],
	lt?:string | null,
	lte?:string | null,
	not?:ValueTypes["NestedStringWithAggregatesFilter"] | null,
	notIn?:string[],
	startsWith?:string | null
};
	["Organization"]: AliasType<{
	createdAt?:boolean,
	id?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	["OrganizationCountAggregate"]: AliasType<{
	_all?:boolean,
	createdAt?:boolean,
	id?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	["OrganizationCountOrderByAggregateInput"]: {
	createdAt?:ValueTypes["SortOrder"] | null,
	id?:ValueTypes["SortOrder"] | null,
	name?:ValueTypes["SortOrder"] | null
};
	["OrganizationGroupBy"]: AliasType<{
	_count?:ValueTypes["OrganizationCountAggregate"],
	_max?:ValueTypes["OrganizationMaxAggregate"],
	_min?:ValueTypes["OrganizationMinAggregate"],
	createdAt?:boolean,
	id?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	["OrganizationMaxAggregate"]: AliasType<{
	createdAt?:boolean,
	id?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	["OrganizationMaxOrderByAggregateInput"]: {
	createdAt?:ValueTypes["SortOrder"] | null,
	id?:ValueTypes["SortOrder"] | null,
	name?:ValueTypes["SortOrder"] | null
};
	["OrganizationMinAggregate"]: AliasType<{
	createdAt?:boolean,
	id?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	["OrganizationMinOrderByAggregateInput"]: {
	createdAt?:ValueTypes["SortOrder"] | null,
	id?:ValueTypes["SortOrder"] | null,
	name?:ValueTypes["SortOrder"] | null
};
	["OrganizationOrderByWithAggregationInput"]: {
	_count?:ValueTypes["OrganizationCountOrderByAggregateInput"] | null,
	_max?:ValueTypes["OrganizationMaxOrderByAggregateInput"] | null,
	_min?:ValueTypes["OrganizationMinOrderByAggregateInput"] | null,
	createdAt?:ValueTypes["SortOrder"] | null,
	id?:ValueTypes["SortOrder"] | null,
	name?:ValueTypes["SortOrder"] | null
};
	["OrganizationOrderByWithRelationInput"]: {
	createdAt?:ValueTypes["SortOrder"] | null,
	id?:ValueTypes["SortOrder"] | null,
	name?:ValueTypes["SortOrder"] | null
};
	["OrganizationScalarFieldEnum"]:OrganizationScalarFieldEnum;
	["OrganizationScalarWhereWithAggregatesInput"]: {
	AND?:ValueTypes["OrganizationScalarWhereWithAggregatesInput"][],
	NOT?:ValueTypes["OrganizationScalarWhereWithAggregatesInput"][],
	OR?:ValueTypes["OrganizationScalarWhereWithAggregatesInput"][],
	createdAt?:ValueTypes["DateTimeWithAggregatesFilter"] | null,
	id?:ValueTypes["StringWithAggregatesFilter"] | null,
	name?:ValueTypes["StringWithAggregatesFilter"] | null
};
	["OrganizationWhereInput"]: {
	AND?:ValueTypes["OrganizationWhereInput"][],
	NOT?:ValueTypes["OrganizationWhereInput"][],
	OR?:ValueTypes["OrganizationWhereInput"][],
	createdAt?:ValueTypes["DateTimeFilter"] | null,
	id?:ValueTypes["StringFilter"] | null,
	name?:ValueTypes["StringFilter"] | null
};
	["OrganizationWhereUniqueInput"]: {
	id?:string | null
};
	["Query"]: AliasType<{
aggregateOrganization?: [{	cursor?:ValueTypes["OrganizationWhereUniqueInput"] | null,	orderBy?:ValueTypes["OrganizationOrderByWithRelationInput"][],	skip?:number | null,	take?:number | null,	where?:ValueTypes["OrganizationWhereInput"] | null},ValueTypes["AggregateOrganization"]],
aggregateUser?: [{	cursor?:ValueTypes["UserWhereUniqueInput"] | null,	orderBy?:ValueTypes["UserOrderByWithRelationInput"][],	skip?:number | null,	take?:number | null,	where?:ValueTypes["UserWhereInput"] | null},ValueTypes["AggregateUser"]],
findFirstOrganization?: [{	cursor?:ValueTypes["OrganizationWhereUniqueInput"] | null,	distinct?:ValueTypes["OrganizationScalarFieldEnum"][],	orderBy?:ValueTypes["OrganizationOrderByWithRelationInput"][],	skip?:number | null,	take?:number | null,	where?:ValueTypes["OrganizationWhereInput"] | null},ValueTypes["Organization"]],
findFirstUser?: [{	cursor?:ValueTypes["UserWhereUniqueInput"] | null,	distinct?:ValueTypes["UserScalarFieldEnum"][],	orderBy?:ValueTypes["UserOrderByWithRelationInput"][],	skip?:number | null,	take?:number | null,	where?:ValueTypes["UserWhereInput"] | null},ValueTypes["User"]],
groupByOrganization?: [{	by:ValueTypes["OrganizationScalarFieldEnum"][],	having?:ValueTypes["OrganizationScalarWhereWithAggregatesInput"] | null,	orderBy?:ValueTypes["OrganizationOrderByWithAggregationInput"][],	skip?:number | null,	take?:number | null,	where?:ValueTypes["OrganizationWhereInput"] | null},ValueTypes["OrganizationGroupBy"]],
groupByUser?: [{	by:ValueTypes["UserScalarFieldEnum"][],	having?:ValueTypes["UserScalarWhereWithAggregatesInput"] | null,	orderBy?:ValueTypes["UserOrderByWithAggregationInput"][],	skip?:number | null,	take?:number | null,	where?:ValueTypes["UserWhereInput"] | null},ValueTypes["UserGroupBy"]],
organization?: [{	where:ValueTypes["OrganizationWhereUniqueInput"]},ValueTypes["Organization"]],
organizations?: [{	cursor?:ValueTypes["OrganizationWhereUniqueInput"] | null,	distinct?:ValueTypes["OrganizationScalarFieldEnum"][],	orderBy?:ValueTypes["OrganizationOrderByWithRelationInput"][],	skip?:number | null,	take?:number | null,	where?:ValueTypes["OrganizationWhereInput"] | null},ValueTypes["Organization"]],
user?: [{	where:ValueTypes["UserWhereUniqueInput"]},ValueTypes["User"]],
users?: [{	cursor?:ValueTypes["UserWhereUniqueInput"] | null,	distinct?:ValueTypes["UserScalarFieldEnum"][],	orderBy?:ValueTypes["UserOrderByWithRelationInput"][],	skip?:number | null,	take?:number | null,	where?:ValueTypes["UserWhereInput"] | null},ValueTypes["User"]],
		__typename?: boolean
}>;
	["QueryMode"]:QueryMode;
	["SortOrder"]:SortOrder;
	["StringFilter"]: {
	contains?:string | null,
	endsWith?:string | null,
	equals?:string | null,
	gt?:string | null,
	gte?:string | null,
	in?:string[],
	lt?:string | null,
	lte?:string | null,
	mode?:ValueTypes["QueryMode"] | null,
	not?:ValueTypes["NestedStringFilter"] | null,
	notIn?:string[],
	startsWith?:string | null
};
	["StringWithAggregatesFilter"]: {
	_count?:ValueTypes["NestedIntFilter"] | null,
	_max?:ValueTypes["NestedStringFilter"] | null,
	_min?:ValueTypes["NestedStringFilter"] | null,
	contains?:string | null,
	endsWith?:string | null,
	equals?:string | null,
	gt?:string | null,
	gte?:string | null,
	in?:string[],
	lt?:string | null,
	lte?:string | null,
	mode?:ValueTypes["QueryMode"] | null,
	not?:ValueTypes["NestedStringWithAggregatesFilter"] | null,
	notIn?:string[],
	startsWith?:string | null
};
	["User"]: AliasType<{
	createdAt?:boolean,
	email?:boolean,
	emailVerifiedAt?:boolean,
	id?:boolean,
		__typename?: boolean
}>;
	["UserCountAggregate"]: AliasType<{
	_all?:boolean,
	createdAt?:boolean,
	email?:boolean,
	emailVerifiedAt?:boolean,
	id?:boolean,
		__typename?: boolean
}>;
	["UserCountOrderByAggregateInput"]: {
	createdAt?:ValueTypes["SortOrder"] | null,
	email?:ValueTypes["SortOrder"] | null,
	emailVerifiedAt?:ValueTypes["SortOrder"] | null,
	id?:ValueTypes["SortOrder"] | null
};
	["UserGroupBy"]: AliasType<{
	_count?:ValueTypes["UserCountAggregate"],
	_max?:ValueTypes["UserMaxAggregate"],
	_min?:ValueTypes["UserMinAggregate"],
	createdAt?:boolean,
	email?:boolean,
	emailVerifiedAt?:boolean,
	id?:boolean,
		__typename?: boolean
}>;
	["UserMaxAggregate"]: AliasType<{
	createdAt?:boolean,
	email?:boolean,
	emailVerifiedAt?:boolean,
	id?:boolean,
		__typename?: boolean
}>;
	["UserMaxOrderByAggregateInput"]: {
	createdAt?:ValueTypes["SortOrder"] | null,
	email?:ValueTypes["SortOrder"] | null,
	emailVerifiedAt?:ValueTypes["SortOrder"] | null,
	id?:ValueTypes["SortOrder"] | null
};
	["UserMinAggregate"]: AliasType<{
	createdAt?:boolean,
	email?:boolean,
	emailVerifiedAt?:boolean,
	id?:boolean,
		__typename?: boolean
}>;
	["UserMinOrderByAggregateInput"]: {
	createdAt?:ValueTypes["SortOrder"] | null,
	email?:ValueTypes["SortOrder"] | null,
	emailVerifiedAt?:ValueTypes["SortOrder"] | null,
	id?:ValueTypes["SortOrder"] | null
};
	["UserOrderByWithAggregationInput"]: {
	_count?:ValueTypes["UserCountOrderByAggregateInput"] | null,
	_max?:ValueTypes["UserMaxOrderByAggregateInput"] | null,
	_min?:ValueTypes["UserMinOrderByAggregateInput"] | null,
	createdAt?:ValueTypes["SortOrder"] | null,
	email?:ValueTypes["SortOrder"] | null,
	emailVerifiedAt?:ValueTypes["SortOrder"] | null,
	id?:ValueTypes["SortOrder"] | null
};
	["UserOrderByWithRelationInput"]: {
	createdAt?:ValueTypes["SortOrder"] | null,
	email?:ValueTypes["SortOrder"] | null,
	emailVerifiedAt?:ValueTypes["SortOrder"] | null,
	id?:ValueTypes["SortOrder"] | null
};
	["UserScalarFieldEnum"]:UserScalarFieldEnum;
	["UserScalarWhereWithAggregatesInput"]: {
	AND?:ValueTypes["UserScalarWhereWithAggregatesInput"][],
	NOT?:ValueTypes["UserScalarWhereWithAggregatesInput"][],
	OR?:ValueTypes["UserScalarWhereWithAggregatesInput"][],
	createdAt?:ValueTypes["DateTimeWithAggregatesFilter"] | null,
	email?:ValueTypes["StringWithAggregatesFilter"] | null,
	emailVerifiedAt?:ValueTypes["DateTimeNullableWithAggregatesFilter"] | null,
	id?:ValueTypes["StringWithAggregatesFilter"] | null
};
	["UserWhereInput"]: {
	AND?:ValueTypes["UserWhereInput"][],
	NOT?:ValueTypes["UserWhereInput"][],
	OR?:ValueTypes["UserWhereInput"][],
	createdAt?:ValueTypes["DateTimeFilter"] | null,
	email?:ValueTypes["StringFilter"] | null,
	emailVerifiedAt?:ValueTypes["DateTimeNullableFilter"] | null,
	id?:ValueTypes["StringFilter"] | null
};
	["UserWhereUniqueInput"]: {
	email?:string | null,
	id?:string | null
}
  }

export type ModelTypes = {
    ["AggregateOrganization"]: {
		_count?:ModelTypes["OrganizationCountAggregate"],
	_max?:ModelTypes["OrganizationMaxAggregate"],
	_min?:ModelTypes["OrganizationMinAggregate"]
};
	["AggregateUser"]: {
		_count?:ModelTypes["UserCountAggregate"],
	_max?:ModelTypes["UserMaxAggregate"],
	_min?:ModelTypes["UserMinAggregate"]
};
	/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
["DateTime"]:any;
	["DateTimeFilter"]: GraphQLTypes["DateTimeFilter"];
	["DateTimeNullableFilter"]: GraphQLTypes["DateTimeNullableFilter"];
	["DateTimeNullableWithAggregatesFilter"]: GraphQLTypes["DateTimeNullableWithAggregatesFilter"];
	["DateTimeWithAggregatesFilter"]: GraphQLTypes["DateTimeWithAggregatesFilter"];
	["NestedDateTimeFilter"]: GraphQLTypes["NestedDateTimeFilter"];
	["NestedDateTimeNullableFilter"]: GraphQLTypes["NestedDateTimeNullableFilter"];
	["NestedDateTimeNullableWithAggregatesFilter"]: GraphQLTypes["NestedDateTimeNullableWithAggregatesFilter"];
	["NestedDateTimeWithAggregatesFilter"]: GraphQLTypes["NestedDateTimeWithAggregatesFilter"];
	["NestedIntFilter"]: GraphQLTypes["NestedIntFilter"];
	["NestedIntNullableFilter"]: GraphQLTypes["NestedIntNullableFilter"];
	["NestedStringFilter"]: GraphQLTypes["NestedStringFilter"];
	["NestedStringWithAggregatesFilter"]: GraphQLTypes["NestedStringWithAggregatesFilter"];
	["Organization"]: {
		createdAt:ModelTypes["DateTime"],
	id:string,
	name:string
};
	["OrganizationCountAggregate"]: {
		_all:number,
	createdAt:number,
	id:number,
	name:number
};
	["OrganizationCountOrderByAggregateInput"]: GraphQLTypes["OrganizationCountOrderByAggregateInput"];
	["OrganizationGroupBy"]: {
		_count?:ModelTypes["OrganizationCountAggregate"],
	_max?:ModelTypes["OrganizationMaxAggregate"],
	_min?:ModelTypes["OrganizationMinAggregate"],
	createdAt:ModelTypes["DateTime"],
	id:string,
	name:string
};
	["OrganizationMaxAggregate"]: {
		createdAt?:ModelTypes["DateTime"],
	id?:string,
	name?:string
};
	["OrganizationMaxOrderByAggregateInput"]: GraphQLTypes["OrganizationMaxOrderByAggregateInput"];
	["OrganizationMinAggregate"]: {
		createdAt?:ModelTypes["DateTime"],
	id?:string,
	name?:string
};
	["OrganizationMinOrderByAggregateInput"]: GraphQLTypes["OrganizationMinOrderByAggregateInput"];
	["OrganizationOrderByWithAggregationInput"]: GraphQLTypes["OrganizationOrderByWithAggregationInput"];
	["OrganizationOrderByWithRelationInput"]: GraphQLTypes["OrganizationOrderByWithRelationInput"];
	["OrganizationScalarFieldEnum"]: GraphQLTypes["OrganizationScalarFieldEnum"];
	["OrganizationScalarWhereWithAggregatesInput"]: GraphQLTypes["OrganizationScalarWhereWithAggregatesInput"];
	["OrganizationWhereInput"]: GraphQLTypes["OrganizationWhereInput"];
	["OrganizationWhereUniqueInput"]: GraphQLTypes["OrganizationWhereUniqueInput"];
	["Query"]: {
		aggregateOrganization:ModelTypes["AggregateOrganization"],
	aggregateUser:ModelTypes["AggregateUser"],
	findFirstOrganization?:ModelTypes["Organization"],
	findFirstUser?:ModelTypes["User"],
	groupByOrganization:ModelTypes["OrganizationGroupBy"][],
	groupByUser:ModelTypes["UserGroupBy"][],
	organization?:ModelTypes["Organization"],
	organizations:ModelTypes["Organization"][],
	user?:ModelTypes["User"],
	users:ModelTypes["User"][]
};
	["QueryMode"]: GraphQLTypes["QueryMode"];
	["SortOrder"]: GraphQLTypes["SortOrder"];
	["StringFilter"]: GraphQLTypes["StringFilter"];
	["StringWithAggregatesFilter"]: GraphQLTypes["StringWithAggregatesFilter"];
	["User"]: {
		createdAt:ModelTypes["DateTime"],
	email:string,
	emailVerifiedAt?:ModelTypes["DateTime"],
	id:string
};
	["UserCountAggregate"]: {
		_all:number,
	createdAt:number,
	email:number,
	emailVerifiedAt:number,
	id:number
};
	["UserCountOrderByAggregateInput"]: GraphQLTypes["UserCountOrderByAggregateInput"];
	["UserGroupBy"]: {
		_count?:ModelTypes["UserCountAggregate"],
	_max?:ModelTypes["UserMaxAggregate"],
	_min?:ModelTypes["UserMinAggregate"],
	createdAt:ModelTypes["DateTime"],
	email:string,
	emailVerifiedAt?:ModelTypes["DateTime"],
	id:string
};
	["UserMaxAggregate"]: {
		createdAt?:ModelTypes["DateTime"],
	email?:string,
	emailVerifiedAt?:ModelTypes["DateTime"],
	id?:string
};
	["UserMaxOrderByAggregateInput"]: GraphQLTypes["UserMaxOrderByAggregateInput"];
	["UserMinAggregate"]: {
		createdAt?:ModelTypes["DateTime"],
	email?:string,
	emailVerifiedAt?:ModelTypes["DateTime"],
	id?:string
};
	["UserMinOrderByAggregateInput"]: GraphQLTypes["UserMinOrderByAggregateInput"];
	["UserOrderByWithAggregationInput"]: GraphQLTypes["UserOrderByWithAggregationInput"];
	["UserOrderByWithRelationInput"]: GraphQLTypes["UserOrderByWithRelationInput"];
	["UserScalarFieldEnum"]: GraphQLTypes["UserScalarFieldEnum"];
	["UserScalarWhereWithAggregatesInput"]: GraphQLTypes["UserScalarWhereWithAggregatesInput"];
	["UserWhereInput"]: GraphQLTypes["UserWhereInput"];
	["UserWhereUniqueInput"]: GraphQLTypes["UserWhereUniqueInput"]
    }

export type GraphQLTypes = {
    // -----------------------------------------------;
	// !!! THIS FILE WAS GENERATED BY TYPE-GRAPHQL !!!;
	// !!!   DO NOT MODIFY THIS FILE BY YOURSELF   !!!;
	// -----------------------------------------------;
	["AggregateOrganization"]: {
	__typename: "AggregateOrganization",
	_count?: GraphQLTypes["OrganizationCountAggregate"],
	_max?: GraphQLTypes["OrganizationMaxAggregate"],
	_min?: GraphQLTypes["OrganizationMinAggregate"]
};
	["AggregateUser"]: {
	__typename: "AggregateUser",
	_count?: GraphQLTypes["UserCountAggregate"],
	_max?: GraphQLTypes["UserMaxAggregate"],
	_min?: GraphQLTypes["UserMinAggregate"]
};
	/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
["DateTime"]:any;
	["DateTimeFilter"]: {
		equals?: GraphQLTypes["DateTime"],
	gt?: GraphQLTypes["DateTime"],
	gte?: GraphQLTypes["DateTime"],
	in?: Array<GraphQLTypes["DateTime"]>,
	lt?: GraphQLTypes["DateTime"],
	lte?: GraphQLTypes["DateTime"],
	not?: GraphQLTypes["NestedDateTimeFilter"],
	notIn?: Array<GraphQLTypes["DateTime"]>
};
	["DateTimeNullableFilter"]: {
		equals?: GraphQLTypes["DateTime"],
	gt?: GraphQLTypes["DateTime"],
	gte?: GraphQLTypes["DateTime"],
	in?: Array<GraphQLTypes["DateTime"]>,
	lt?: GraphQLTypes["DateTime"],
	lte?: GraphQLTypes["DateTime"],
	not?: GraphQLTypes["NestedDateTimeNullableFilter"],
	notIn?: Array<GraphQLTypes["DateTime"]>
};
	["DateTimeNullableWithAggregatesFilter"]: {
		_count?: GraphQLTypes["NestedIntNullableFilter"],
	_max?: GraphQLTypes["NestedDateTimeNullableFilter"],
	_min?: GraphQLTypes["NestedDateTimeNullableFilter"],
	equals?: GraphQLTypes["DateTime"],
	gt?: GraphQLTypes["DateTime"],
	gte?: GraphQLTypes["DateTime"],
	in?: Array<GraphQLTypes["DateTime"]>,
	lt?: GraphQLTypes["DateTime"],
	lte?: GraphQLTypes["DateTime"],
	not?: GraphQLTypes["NestedDateTimeNullableWithAggregatesFilter"],
	notIn?: Array<GraphQLTypes["DateTime"]>
};
	["DateTimeWithAggregatesFilter"]: {
		_count?: GraphQLTypes["NestedIntFilter"],
	_max?: GraphQLTypes["NestedDateTimeFilter"],
	_min?: GraphQLTypes["NestedDateTimeFilter"],
	equals?: GraphQLTypes["DateTime"],
	gt?: GraphQLTypes["DateTime"],
	gte?: GraphQLTypes["DateTime"],
	in?: Array<GraphQLTypes["DateTime"]>,
	lt?: GraphQLTypes["DateTime"],
	lte?: GraphQLTypes["DateTime"],
	not?: GraphQLTypes["NestedDateTimeWithAggregatesFilter"],
	notIn?: Array<GraphQLTypes["DateTime"]>
};
	["NestedDateTimeFilter"]: {
		equals?: GraphQLTypes["DateTime"],
	gt?: GraphQLTypes["DateTime"],
	gte?: GraphQLTypes["DateTime"],
	in?: Array<GraphQLTypes["DateTime"]>,
	lt?: GraphQLTypes["DateTime"],
	lte?: GraphQLTypes["DateTime"],
	not?: GraphQLTypes["NestedDateTimeFilter"],
	notIn?: Array<GraphQLTypes["DateTime"]>
};
	["NestedDateTimeNullableFilter"]: {
		equals?: GraphQLTypes["DateTime"],
	gt?: GraphQLTypes["DateTime"],
	gte?: GraphQLTypes["DateTime"],
	in?: Array<GraphQLTypes["DateTime"]>,
	lt?: GraphQLTypes["DateTime"],
	lte?: GraphQLTypes["DateTime"],
	not?: GraphQLTypes["NestedDateTimeNullableFilter"],
	notIn?: Array<GraphQLTypes["DateTime"]>
};
	["NestedDateTimeNullableWithAggregatesFilter"]: {
		_count?: GraphQLTypes["NestedIntNullableFilter"],
	_max?: GraphQLTypes["NestedDateTimeNullableFilter"],
	_min?: GraphQLTypes["NestedDateTimeNullableFilter"],
	equals?: GraphQLTypes["DateTime"],
	gt?: GraphQLTypes["DateTime"],
	gte?: GraphQLTypes["DateTime"],
	in?: Array<GraphQLTypes["DateTime"]>,
	lt?: GraphQLTypes["DateTime"],
	lte?: GraphQLTypes["DateTime"],
	not?: GraphQLTypes["NestedDateTimeNullableWithAggregatesFilter"],
	notIn?: Array<GraphQLTypes["DateTime"]>
};
	["NestedDateTimeWithAggregatesFilter"]: {
		_count?: GraphQLTypes["NestedIntFilter"],
	_max?: GraphQLTypes["NestedDateTimeFilter"],
	_min?: GraphQLTypes["NestedDateTimeFilter"],
	equals?: GraphQLTypes["DateTime"],
	gt?: GraphQLTypes["DateTime"],
	gte?: GraphQLTypes["DateTime"],
	in?: Array<GraphQLTypes["DateTime"]>,
	lt?: GraphQLTypes["DateTime"],
	lte?: GraphQLTypes["DateTime"],
	not?: GraphQLTypes["NestedDateTimeWithAggregatesFilter"],
	notIn?: Array<GraphQLTypes["DateTime"]>
};
	["NestedIntFilter"]: {
		equals?: number,
	gt?: number,
	gte?: number,
	in?: Array<number>,
	lt?: number,
	lte?: number,
	not?: GraphQLTypes["NestedIntFilter"],
	notIn?: Array<number>
};
	["NestedIntNullableFilter"]: {
		equals?: number,
	gt?: number,
	gte?: number,
	in?: Array<number>,
	lt?: number,
	lte?: number,
	not?: GraphQLTypes["NestedIntNullableFilter"],
	notIn?: Array<number>
};
	["NestedStringFilter"]: {
		contains?: string,
	endsWith?: string,
	equals?: string,
	gt?: string,
	gte?: string,
	in?: Array<string>,
	lt?: string,
	lte?: string,
	not?: GraphQLTypes["NestedStringFilter"],
	notIn?: Array<string>,
	startsWith?: string
};
	["NestedStringWithAggregatesFilter"]: {
		_count?: GraphQLTypes["NestedIntFilter"],
	_max?: GraphQLTypes["NestedStringFilter"],
	_min?: GraphQLTypes["NestedStringFilter"],
	contains?: string,
	endsWith?: string,
	equals?: string,
	gt?: string,
	gte?: string,
	in?: Array<string>,
	lt?: string,
	lte?: string,
	not?: GraphQLTypes["NestedStringWithAggregatesFilter"],
	notIn?: Array<string>,
	startsWith?: string
};
	["Organization"]: {
	__typename: "Organization",
	createdAt: GraphQLTypes["DateTime"],
	id: string,
	name: string
};
	["OrganizationCountAggregate"]: {
	__typename: "OrganizationCountAggregate",
	_all: number,
	createdAt: number,
	id: number,
	name: number
};
	["OrganizationCountOrderByAggregateInput"]: {
		createdAt?: GraphQLTypes["SortOrder"],
	id?: GraphQLTypes["SortOrder"],
	name?: GraphQLTypes["SortOrder"]
};
	["OrganizationGroupBy"]: {
	__typename: "OrganizationGroupBy",
	_count?: GraphQLTypes["OrganizationCountAggregate"],
	_max?: GraphQLTypes["OrganizationMaxAggregate"],
	_min?: GraphQLTypes["OrganizationMinAggregate"],
	createdAt: GraphQLTypes["DateTime"],
	id: string,
	name: string
};
	["OrganizationMaxAggregate"]: {
	__typename: "OrganizationMaxAggregate",
	createdAt?: GraphQLTypes["DateTime"],
	id?: string,
	name?: string
};
	["OrganizationMaxOrderByAggregateInput"]: {
		createdAt?: GraphQLTypes["SortOrder"],
	id?: GraphQLTypes["SortOrder"],
	name?: GraphQLTypes["SortOrder"]
};
	["OrganizationMinAggregate"]: {
	__typename: "OrganizationMinAggregate",
	createdAt?: GraphQLTypes["DateTime"],
	id?: string,
	name?: string
};
	["OrganizationMinOrderByAggregateInput"]: {
		createdAt?: GraphQLTypes["SortOrder"],
	id?: GraphQLTypes["SortOrder"],
	name?: GraphQLTypes["SortOrder"]
};
	["OrganizationOrderByWithAggregationInput"]: {
		_count?: GraphQLTypes["OrganizationCountOrderByAggregateInput"],
	_max?: GraphQLTypes["OrganizationMaxOrderByAggregateInput"],
	_min?: GraphQLTypes["OrganizationMinOrderByAggregateInput"],
	createdAt?: GraphQLTypes["SortOrder"],
	id?: GraphQLTypes["SortOrder"],
	name?: GraphQLTypes["SortOrder"]
};
	["OrganizationOrderByWithRelationInput"]: {
		createdAt?: GraphQLTypes["SortOrder"],
	id?: GraphQLTypes["SortOrder"],
	name?: GraphQLTypes["SortOrder"]
};
	["OrganizationScalarFieldEnum"]: OrganizationScalarFieldEnum;
	["OrganizationScalarWhereWithAggregatesInput"]: {
		AND?: Array<GraphQLTypes["OrganizationScalarWhereWithAggregatesInput"]>,
	NOT?: Array<GraphQLTypes["OrganizationScalarWhereWithAggregatesInput"]>,
	OR?: Array<GraphQLTypes["OrganizationScalarWhereWithAggregatesInput"]>,
	createdAt?: GraphQLTypes["DateTimeWithAggregatesFilter"],
	id?: GraphQLTypes["StringWithAggregatesFilter"],
	name?: GraphQLTypes["StringWithAggregatesFilter"]
};
	["OrganizationWhereInput"]: {
		AND?: Array<GraphQLTypes["OrganizationWhereInput"]>,
	NOT?: Array<GraphQLTypes["OrganizationWhereInput"]>,
	OR?: Array<GraphQLTypes["OrganizationWhereInput"]>,
	createdAt?: GraphQLTypes["DateTimeFilter"],
	id?: GraphQLTypes["StringFilter"],
	name?: GraphQLTypes["StringFilter"]
};
	["OrganizationWhereUniqueInput"]: {
		id?: string
};
	["Query"]: {
	__typename: "Query",
	aggregateOrganization: GraphQLTypes["AggregateOrganization"],
	aggregateUser: GraphQLTypes["AggregateUser"],
	findFirstOrganization?: GraphQLTypes["Organization"],
	findFirstUser?: GraphQLTypes["User"],
	groupByOrganization: Array<GraphQLTypes["OrganizationGroupBy"]>,
	groupByUser: Array<GraphQLTypes["UserGroupBy"]>,
	organization?: GraphQLTypes["Organization"],
	organizations: Array<GraphQLTypes["Organization"]>,
	user?: GraphQLTypes["User"],
	users: Array<GraphQLTypes["User"]>
};
	["QueryMode"]: QueryMode;
	["SortOrder"]: SortOrder;
	["StringFilter"]: {
		contains?: string,
	endsWith?: string,
	equals?: string,
	gt?: string,
	gte?: string,
	in?: Array<string>,
	lt?: string,
	lte?: string,
	mode?: GraphQLTypes["QueryMode"],
	not?: GraphQLTypes["NestedStringFilter"],
	notIn?: Array<string>,
	startsWith?: string
};
	["StringWithAggregatesFilter"]: {
		_count?: GraphQLTypes["NestedIntFilter"],
	_max?: GraphQLTypes["NestedStringFilter"],
	_min?: GraphQLTypes["NestedStringFilter"],
	contains?: string,
	endsWith?: string,
	equals?: string,
	gt?: string,
	gte?: string,
	in?: Array<string>,
	lt?: string,
	lte?: string,
	mode?: GraphQLTypes["QueryMode"],
	not?: GraphQLTypes["NestedStringWithAggregatesFilter"],
	notIn?: Array<string>,
	startsWith?: string
};
	["User"]: {
	__typename: "User",
	createdAt: GraphQLTypes["DateTime"],
	email: string,
	emailVerifiedAt?: GraphQLTypes["DateTime"],
	id: string
};
	["UserCountAggregate"]: {
	__typename: "UserCountAggregate",
	_all: number,
	createdAt: number,
	email: number,
	emailVerifiedAt: number,
	id: number
};
	["UserCountOrderByAggregateInput"]: {
		createdAt?: GraphQLTypes["SortOrder"],
	email?: GraphQLTypes["SortOrder"],
	emailVerifiedAt?: GraphQLTypes["SortOrder"],
	id?: GraphQLTypes["SortOrder"]
};
	["UserGroupBy"]: {
	__typename: "UserGroupBy",
	_count?: GraphQLTypes["UserCountAggregate"],
	_max?: GraphQLTypes["UserMaxAggregate"],
	_min?: GraphQLTypes["UserMinAggregate"],
	createdAt: GraphQLTypes["DateTime"],
	email: string,
	emailVerifiedAt?: GraphQLTypes["DateTime"],
	id: string
};
	["UserMaxAggregate"]: {
	__typename: "UserMaxAggregate",
	createdAt?: GraphQLTypes["DateTime"],
	email?: string,
	emailVerifiedAt?: GraphQLTypes["DateTime"],
	id?: string
};
	["UserMaxOrderByAggregateInput"]: {
		createdAt?: GraphQLTypes["SortOrder"],
	email?: GraphQLTypes["SortOrder"],
	emailVerifiedAt?: GraphQLTypes["SortOrder"],
	id?: GraphQLTypes["SortOrder"]
};
	["UserMinAggregate"]: {
	__typename: "UserMinAggregate",
	createdAt?: GraphQLTypes["DateTime"],
	email?: string,
	emailVerifiedAt?: GraphQLTypes["DateTime"],
	id?: string
};
	["UserMinOrderByAggregateInput"]: {
		createdAt?: GraphQLTypes["SortOrder"],
	email?: GraphQLTypes["SortOrder"],
	emailVerifiedAt?: GraphQLTypes["SortOrder"],
	id?: GraphQLTypes["SortOrder"]
};
	["UserOrderByWithAggregationInput"]: {
		_count?: GraphQLTypes["UserCountOrderByAggregateInput"],
	_max?: GraphQLTypes["UserMaxOrderByAggregateInput"],
	_min?: GraphQLTypes["UserMinOrderByAggregateInput"],
	createdAt?: GraphQLTypes["SortOrder"],
	email?: GraphQLTypes["SortOrder"],
	emailVerifiedAt?: GraphQLTypes["SortOrder"],
	id?: GraphQLTypes["SortOrder"]
};
	["UserOrderByWithRelationInput"]: {
		createdAt?: GraphQLTypes["SortOrder"],
	email?: GraphQLTypes["SortOrder"],
	emailVerifiedAt?: GraphQLTypes["SortOrder"],
	id?: GraphQLTypes["SortOrder"]
};
	["UserScalarFieldEnum"]: UserScalarFieldEnum;
	["UserScalarWhereWithAggregatesInput"]: {
		AND?: Array<GraphQLTypes["UserScalarWhereWithAggregatesInput"]>,
	NOT?: Array<GraphQLTypes["UserScalarWhereWithAggregatesInput"]>,
	OR?: Array<GraphQLTypes["UserScalarWhereWithAggregatesInput"]>,
	createdAt?: GraphQLTypes["DateTimeWithAggregatesFilter"],
	email?: GraphQLTypes["StringWithAggregatesFilter"],
	emailVerifiedAt?: GraphQLTypes["DateTimeNullableWithAggregatesFilter"],
	id?: GraphQLTypes["StringWithAggregatesFilter"]
};
	["UserWhereInput"]: {
		AND?: Array<GraphQLTypes["UserWhereInput"]>,
	NOT?: Array<GraphQLTypes["UserWhereInput"]>,
	OR?: Array<GraphQLTypes["UserWhereInput"]>,
	createdAt?: GraphQLTypes["DateTimeFilter"],
	email?: GraphQLTypes["StringFilter"],
	emailVerifiedAt?: GraphQLTypes["DateTimeNullableFilter"],
	id?: GraphQLTypes["StringFilter"]
};
	["UserWhereUniqueInput"]: {
		email?: string,
	id?: string
}
    }
export const enum OrganizationScalarFieldEnum {
	createdAt = "createdAt",
	id = "id",
	name = "name"
}
export const enum QueryMode {
	default = "default",
	insensitive = "insensitive"
}
export const enum SortOrder {
	asc = "asc",
	desc = "desc"
}
export const enum UserScalarFieldEnum {
	createdAt = "createdAt",
	email = "email",
	emailVerifiedAt = "emailVerifiedAt",
	id = "id"
}
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: boolean;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : {}
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type SubscriptionToGraphQL<Z, T> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?: string[] }) => void) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${operationName ? ' ' + operationName : ''}${inspectVariables(buildQuery(tName, o))}`;
  

export const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  options?: OperationOptions,
) => fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r:any) => { 
  seekForAliases(r)
  return r
});


export const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, options?: OperationOptions) =>
  fn(queryConstruct(t, tName, options?.operationName)(o));


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  X,
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
>(
  type: T,
  field: Z,
  fn: (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : any,
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };



const allOperations = {
    "query": "Query"
}

export type GenericOperation<O> = O extends 'query'
  ? "Query"
  : O extends 'mutation'
  ? never
  : never

export const Thunder = (fn: FetchFunction) => <
  O extends 'query',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
  fullChainConstruct(fn)(operation, allOperations[operation])(o as any, ops) as Promise<InputType<GraphQLTypes[R], Z>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));  
  
export const SubscriptionThunder = (fn: SubscriptionFunction) => <
  O extends 'query',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(
  o: Z | ValueTypes[R],
  ops?: OperationOptions
)=>
  fullSubscriptionConstruct(fn)(operation, allOperations[operation])(
    o as any,
    ops,
  ) as SubscriptionToGraphQL<Z, GraphQLTypes[R]>;

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends 'query',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
  o: Z | ValueTypes[R],
  operationName?: string,
) => queryConstruct(operation, allOperations[operation], operationName)(o as any);
export const Selector = <T extends keyof ValueTypes>(key: T) => ZeusSelect<ValueTypes[T]>();
  