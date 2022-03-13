import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AggregateContributionKeySpecifier = ('_count' | '_max' | '_min' | AggregateContributionKeySpecifier)[];
export type AggregateContributionFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
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
export type ContributionKeySpecifier = ('createdAt' | 'id' | 'organization' | 'organizationId' | 'user' | 'userId' | ContributionKeySpecifier)[];
export type ContributionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributionCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'id' | 'organizationId' | 'userId' | ContributionCountAggregateKeySpecifier)[];
export type ContributionCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributionGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'id' | 'organizationId' | 'userId' | ContributionGroupByKeySpecifier)[];
export type ContributionGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributionMaxAggregateKeySpecifier = ('createdAt' | 'id' | 'organizationId' | 'userId' | ContributionMaxAggregateKeySpecifier)[];
export type ContributionMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributionMinAggregateKeySpecifier = ('createdAt' | 'id' | 'organizationId' | 'userId' | ContributionMinAggregateKeySpecifier)[];
export type ContributionMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationKeySpecifier = ('_count' | 'contributions' | 'createdAt' | 'id' | 'name' | OrganizationKeySpecifier)[];
export type OrganizationFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	contributions?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationCountKeySpecifier = ('contributions' | OrganizationCountKeySpecifier)[];
export type OrganizationCountFieldPolicy = {
	contributions?: FieldPolicy<any> | FieldReadFunction<any>
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
export type QueryKeySpecifier = ('aggregateContribution' | 'aggregateOrganization' | 'aggregateUser' | 'contribution' | 'contributions' | 'findFirstContribution' | 'findFirstOrganization' | 'findFirstUser' | 'groupByContribution' | 'groupByOrganization' | 'groupByUser' | 'organization' | 'organizations' | 'user' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	aggregateContribution?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	contribution?: FieldPolicy<any> | FieldReadFunction<any>,
	contributions?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstContribution?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstUser?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByContribution?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('_count' | 'contributions' | 'createdAt' | 'email' | 'emailVerifiedAt' | 'id' | 'name' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	contributions?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountKeySpecifier = ('contributions' | UserCountKeySpecifier)[];
export type UserCountFieldPolicy = {
	contributions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'email' | 'emailVerifiedAt' | 'id' | 'name' | UserCountAggregateKeySpecifier)[];
export type UserCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'email' | 'emailVerifiedAt' | 'id' | 'name' | UserGroupByKeySpecifier)[];
export type UserGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMaxAggregateKeySpecifier = ('createdAt' | 'email' | 'emailVerifiedAt' | 'id' | 'name' | UserMaxAggregateKeySpecifier)[];
export type UserMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMinAggregateKeySpecifier = ('createdAt' | 'email' | 'emailVerifiedAt' | 'id' | 'name' | UserMinAggregateKeySpecifier)[];
export type UserMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AggregateContribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateContributionKeySpecifier | (() => undefined | AggregateContributionKeySpecifier),
		fields?: AggregateContributionFieldPolicy,
	},
	AggregateOrganization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateOrganizationKeySpecifier | (() => undefined | AggregateOrganizationKeySpecifier),
		fields?: AggregateOrganizationFieldPolicy,
	},
	AggregateUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateUserKeySpecifier | (() => undefined | AggregateUserKeySpecifier),
		fields?: AggregateUserFieldPolicy,
	},
	Contribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributionKeySpecifier | (() => undefined | ContributionKeySpecifier),
		fields?: ContributionFieldPolicy,
	},
	ContributionCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributionCountAggregateKeySpecifier | (() => undefined | ContributionCountAggregateKeySpecifier),
		fields?: ContributionCountAggregateFieldPolicy,
	},
	ContributionGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributionGroupByKeySpecifier | (() => undefined | ContributionGroupByKeySpecifier),
		fields?: ContributionGroupByFieldPolicy,
	},
	ContributionMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributionMaxAggregateKeySpecifier | (() => undefined | ContributionMaxAggregateKeySpecifier),
		fields?: ContributionMaxAggregateFieldPolicy,
	},
	ContributionMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributionMinAggregateKeySpecifier | (() => undefined | ContributionMinAggregateKeySpecifier),
		fields?: ContributionMinAggregateFieldPolicy,
	},
	Organization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationKeySpecifier | (() => undefined | OrganizationKeySpecifier),
		fields?: OrganizationFieldPolicy,
	},
	OrganizationCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationCountKeySpecifier | (() => undefined | OrganizationCountKeySpecifier),
		fields?: OrganizationCountFieldPolicy,
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
	UserCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCountKeySpecifier | (() => undefined | UserCountKeySpecifier),
		fields?: UserCountFieldPolicy,
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