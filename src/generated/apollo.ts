import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AggregateOrganizationKeySpecifier = ('_count' | '_max' | '_min' | AggregateOrganizationKeySpecifier)[];
export type AggregateOrganizationFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateUserKeySpecifier = ('_count' | '_max' | '_min' | AggregateUserKeySpecifier)[];
export type AggregateUserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationKeySpecifier = ('createdAt' | 'id' | 'name' | OrganizationKeySpecifier)[];
export type OrganizationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'id' | 'name' | OrganizationCountAggregateKeySpecifier)[];
export type OrganizationCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'id' | 'name' | OrganizationGroupByKeySpecifier)[];
export type OrganizationGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationMaxAggregateKeySpecifier = ('createdAt' | 'id' | 'name' | OrganizationMaxAggregateKeySpecifier)[];
export type OrganizationMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationMinAggregateKeySpecifier = ('createdAt' | 'id' | 'name' | OrganizationMinAggregateKeySpecifier)[];
export type OrganizationMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('aggregateOrganization' | 'aggregateUser' | 'findFirstOrganization' | 'findFirstUser' | 'groupByOrganization' | 'groupByUser' | 'organization' | 'organizations' | 'user' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	aggregateOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstUser?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('createdAt' | 'email' | 'emailVerifiedAt' | 'id' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'email' | 'emailVerifiedAt' | 'id' | UserCountAggregateKeySpecifier)[];
export type UserCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'email' | 'emailVerifiedAt' | 'id' | UserGroupByKeySpecifier)[];
export type UserGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMaxAggregateKeySpecifier = ('createdAt' | 'email' | 'emailVerifiedAt' | 'id' | UserMaxAggregateKeySpecifier)[];
export type UserMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMinAggregateKeySpecifier = ('createdAt' | 'email' | 'emailVerifiedAt' | 'id' | UserMinAggregateKeySpecifier)[];
export type UserMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AggregateOrganization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateOrganizationKeySpecifier | (() => undefined | AggregateOrganizationKeySpecifier),
		fields?: AggregateOrganizationFieldPolicy,
	},
	AggregateUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateUserKeySpecifier | (() => undefined | AggregateUserKeySpecifier),
		fields?: AggregateUserFieldPolicy,
	},
	Organization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationKeySpecifier | (() => undefined | OrganizationKeySpecifier),
		fields?: OrganizationFieldPolicy,
	},
	OrganizationCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationCountAggregateKeySpecifier | (() => undefined | OrganizationCountAggregateKeySpecifier),
		fields?: OrganizationCountAggregateFieldPolicy,
	},
	OrganizationGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationGroupByKeySpecifier | (() => undefined | OrganizationGroupByKeySpecifier),
		fields?: OrganizationGroupByFieldPolicy,
	},
	OrganizationMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationMaxAggregateKeySpecifier | (() => undefined | OrganizationMaxAggregateKeySpecifier),
		fields?: OrganizationMaxAggregateFieldPolicy,
	},
	OrganizationMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationMinAggregateKeySpecifier | (() => undefined | OrganizationMinAggregateKeySpecifier),
		fields?: OrganizationMinAggregateFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCountAggregateKeySpecifier | (() => undefined | UserCountAggregateKeySpecifier),
		fields?: UserCountAggregateFieldPolicy,
	},
	UserGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserGroupByKeySpecifier | (() => undefined | UserGroupByKeySpecifier),
		fields?: UserGroupByFieldPolicy,
	},
	UserMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMaxAggregateKeySpecifier | (() => undefined | UserMaxAggregateKeySpecifier),
		fields?: UserMaxAggregateFieldPolicy,
	},
	UserMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMinAggregateKeySpecifier | (() => undefined | UserMinAggregateKeySpecifier),
		fields?: UserMinAggregateFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;