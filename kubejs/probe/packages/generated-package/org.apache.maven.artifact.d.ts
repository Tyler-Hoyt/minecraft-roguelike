declare module "org.apache.maven.artifact.repository.ArtifactRepository" {
import {$ArtifactRepositoryPolicy, $ArtifactRepositoryPolicy$$Type} from "org.apache.maven.artifact.repository.ArtifactRepositoryPolicy"
import {$List, $List$$Type} from "java.util.List"
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"
import {$Proxy, $Proxy$$Type} from "org.apache.maven.repository.Proxy"
import {$ArtifactMetadata$$Type} from "org.apache.maven.artifact.metadata.ArtifactMetadata"
import {$ArtifactRepositoryLayout, $ArtifactRepositoryLayout$$Type} from "org.apache.maven.artifact.repository.layout.ArtifactRepositoryLayout"
import {$Authentication, $Authentication$$Type} from "org.apache.maven.artifact.repository.Authentication"

export interface $ArtifactRepository$$Interface {
get "key"(): StringJS
get "id"(): StringJS
get "protocol"(): StringJS
get "blocked"(): boolean
get "url"(): StringJS
set "id"(value: StringJS)
set "layout"(value: $ArtifactRepositoryLayout$$Type)
set "proxy"(value: $Proxy$$Type)
get "layout"(): $ArtifactRepositoryLayout
get "blacklisted"(): boolean
get "snapshots"(): $ArtifactRepositoryPolicy
get "releases"(): $ArtifactRepositoryPolicy
get "proxy"(): $Proxy
set "url"(value: StringJS)
set "blocked"(value: boolean)
set "releaseUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
set "mirroredRepositories"(value: $List$$Type<($ArtifactRepository$$Type)>)
set "snapshotUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
get "mirroredRepositories"(): $List<($ArtifactRepository)>
get "basedir"(): StringJS
get "authentication"(): $Authentication
get "projectAware"(): boolean
get "uniqueVersion"(): boolean
set "authentication"(value: $Authentication$$Type)
set "blacklisted"(value: boolean)
}

export class $ArtifactRepository implements $ArtifactRepository$$Interface {
 "getKey"(): StringJS
 "find"(arg0: $Artifact$$Type): $Artifact
 "getId"(): StringJS
 "getProtocol"(): StringJS
 "isBlocked"(): boolean
 "getUrl"(): StringJS
 "setId"(arg0: StringJS): void
 "setLayout"(arg0: $ArtifactRepositoryLayout$$Type): void
 "setProxy"(arg0: $Proxy$$Type): void
 "getLayout"(): $ArtifactRepositoryLayout
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "getReleases"(): $ArtifactRepositoryPolicy
 "getProxy"(): $Proxy
 "setUrl"(arg0: StringJS): void
 "setBlocked"(arg0: boolean): void
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$$Type): StringJS
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$$Type, arg1: $ArtifactRepository$$Type): StringJS
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "setMirroredRepositories"(arg0: $List$$Type<($ArtifactRepository$$Type)>): void
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
 "pathOf"(arg0: $Artifact$$Type): StringJS
 "getBasedir"(): StringJS
 "getAuthentication"(): $Authentication
 "isProjectAware"(): boolean
/**
 * 
 * @deprecated
 */
 "isUniqueVersion"(): boolean
 "setAuthentication"(arg0: $Authentication$$Type): void
 "findVersions"(arg0: $Artifact$$Type): $List<(StringJS)>
/**
 * 
 * @deprecated
 */
 "setBlacklisted"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactRepository$$Type = ($ArtifactRepository);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactRepository$$Original = $ArtifactRepository;}
declare module "org.apache.maven.artifact.resolver.filter.ArtifactFilter" {
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"

export interface $ArtifactFilter$$Interface {

(arg0: $Artifact): boolean
}

export class $ArtifactFilter implements $ArtifactFilter$$Interface {
 "include"(arg0: $Artifact$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactFilter$$Type = ((arg0: $Artifact) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactFilter$$Original = $ArtifactFilter;}
declare module "org.apache.maven.artifact.handler.ArtifactHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ArtifactHandler$$Interface {
get "language"(): StringJS
get "extension"(): StringJS
get "directory"(): StringJS
get "classifier"(): StringJS
get "packaging"(): StringJS
get "addedToClasspath"(): boolean
get "includesDependencies"(): boolean
}

export class $ArtifactHandler implements $ArtifactHandler$$Interface {
static readonly "ROLE": StringJS

 "getLanguage"(): StringJS
 "getExtension"(): StringJS
 "getDirectory"(): StringJS
 "getClassifier"(): StringJS
 "getPackaging"(): StringJS
 "isAddedToClasspath"(): boolean
 "isIncludesDependencies"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactHandler$$Type = ($ArtifactHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactHandler$$Original = $ArtifactHandler;}
declare module "org.apache.maven.artifact.metadata.ArtifactMetadata" {
import {$ArtifactRepository$$Type} from "org.apache.maven.artifact.repository.ArtifactRepository"
import {$ArtifactMetadata$$Type as $ArtifactMetadata$0$$Type, $ArtifactMetadata$$Interface as $ArtifactMetadata$0$$Interface} from "org.apache.maven.repository.legacy.metadata.ArtifactMetadata"

/**
 * 
 * @deprecated
 */
export interface $ArtifactMetadata$$Interface extends $ArtifactMetadata$0$$Interface {
get "key"(): any
get "groupId"(): StringJS
get "artifactId"(): StringJS
get "baseVersion"(): StringJS
get "remoteFilename"(): StringJS
}

export class $ArtifactMetadata implements $ArtifactMetadata$$Interface {
 "merge"(arg0: $ArtifactMetadata$$Type): void
 "merge"(arg0: $ArtifactMetadata$0$$Type): void
 "getKey"(): any
 "getGroupId"(): StringJS
 "getArtifactId"(): StringJS
 "storedInArtifactVersionDirectory"(): boolean
 "storedInGroupDirectory"(): boolean
 "storeInLocalRepository"(arg0: $ArtifactRepository$$Type, arg1: $ArtifactRepository$$Type): void
 "getBaseVersion"(): StringJS
 "getLocalFilename"(arg0: $ArtifactRepository$$Type): StringJS
 "getRemoteFilename"(): StringJS
 "extendedToString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactMetadata$$Type = ($ArtifactMetadata);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactMetadata$$Original = $ArtifactMetadata;}
declare module "org.apache.maven.artifact.versioning.ArtifactVersion" {
import {$Comparable$$Interface} from "java.lang.Comparable"

export interface $ArtifactVersion$$Interface extends $Comparable$$Interface<($ArtifactVersion)> {
get "majorVersion"(): integer
get "minorVersion"(): integer
get "buildNumber"(): integer
get "qualifier"(): StringJS
get "incrementalVersion"(): integer
}

export class $ArtifactVersion implements $ArtifactVersion$$Interface {
 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "getBuildNumber"(): integer
 "parseVersion"(arg0: StringJS): void
 "getQualifier"(): StringJS
 "getIncrementalVersion"(): integer
 "compareTo"(arg0: $ArtifactVersion$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactVersion$$Type = ($ArtifactVersion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactVersion$$Original = $ArtifactVersion;}
declare module "org.apache.maven.artifact.versioning.Restriction" {
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"

export class $Restriction {
static readonly "EVERYTHING": $Restriction

constructor(arg0: $ArtifactVersion$$Type, arg1: boolean, arg2: $ArtifactVersion$$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isLowerBoundInclusive"(): boolean
public "isUpperBoundInclusive"(): boolean
public "getLowerBound"(): $ArtifactVersion
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "getUpperBound"(): $ArtifactVersion
get "lowerBoundInclusive"(): boolean
get "upperBoundInclusive"(): boolean
get "lowerBound"(): $ArtifactVersion
get "upperBound"(): $ArtifactVersion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Restriction$$Type = ($Restriction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Restriction$$Original = $Restriction;}
declare module "org.apache.maven.artifact.Artifact" {
import {$ArtifactFilter, $ArtifactFilter$$Type} from "org.apache.maven.artifact.resolver.filter.ArtifactFilter"
import {$ArtifactRepository, $ArtifactRepository$$Type} from "org.apache.maven.artifact.repository.ArtifactRepository"
import {$Pattern} from "java.util.regex.Pattern"
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$Collection} from "java.util.Collection"
import {$File, $File$$Type} from "java.io.File"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$ArtifactHandler, $ArtifactHandler$$Type} from "org.apache.maven.artifact.handler.ArtifactHandler"
import {$List, $List$$Type} from "java.util.List"
import {$VersionRange, $VersionRange$$Type} from "org.apache.maven.artifact.versioning.VersionRange"
import {$ArtifactMetadata, $ArtifactMetadata$$Type} from "org.apache.maven.artifact.metadata.ArtifactMetadata"

export interface $Artifact$$Interface extends $Comparable$$Interface<($Artifact)> {
get "id"(): StringJS
get "type"(): StringJS
get "scope"(): StringJS
get "resolved"(): boolean
set "release"(value: boolean)
get "file"(): $File
get "version"(): StringJS
get "snapshot"(): boolean
get "optional"(): boolean
set "file"(value: $File$$Type)
get "groupId"(): StringJS
get "selectedVersionKnown"(): boolean
set "version"(value: StringJS)
get "repository"(): $ArtifactRepository
get "artifactId"(): StringJS
get "dependencyTrail"(): $List<(StringJS)>
get "selectedVersion"(): $ArtifactVersion
get "classifier"(): StringJS
get "versionRange"(): $VersionRange
set "scope"(value: StringJS)
get "dependencyConflictId"(): StringJS
get "dependencyFilter"(): $ArtifactFilter
set "dependencyFilter"(value: $ArtifactFilter$$Type)
get "availableVersions"(): $List<($ArtifactVersion)>
set "availableVersions"(value: $List$$Type<($ArtifactVersion$$Type)>)
set "groupId"(value: StringJS)
get "release"(): boolean
set "baseVersion"(value: StringJS)
get "baseVersion"(): StringJS
set "resolved"(value: boolean)
set "resolvedVersion"(value: StringJS)
set "artifactHandler"(value: $ArtifactHandler$$Type)
set "repository"(value: $ArtifactRepository$$Type)
set "artifactId"(value: StringJS)
set "optional"(value: boolean)
get "metadataList"(): $Collection<($ArtifactMetadata)>
get "downloadUrl"(): StringJS
get "artifactHandler"(): $ArtifactHandler
set "downloadUrl"(value: StringJS)
set "dependencyTrail"(value: $List$$Type<(StringJS)>)
set "versionRange"(value: $VersionRange$$Type)
}

export class $Artifact implements $Artifact$$Interface {
static readonly "VERSION_FILE_PATTERN": $Pattern
static readonly "SCOPE_RUNTIME": StringJS
static readonly "SCOPE_TEST": StringJS
static readonly "SCOPE_RUNTIME_PLUS_SYSTEM": StringJS
static readonly "SCOPE_IMPORT": StringJS
static readonly "SCOPE_PROVIDED": StringJS
static readonly "RELEASE_VERSION": StringJS
static readonly "SCOPE_SYSTEM": StringJS
static readonly "SNAPSHOT_VERSION": StringJS
static readonly "SCOPE_COMPILE": StringJS
static readonly "SCOPE_COMPILE_PLUS_RUNTIME": StringJS
static readonly "LATEST_VERSION": StringJS

 "getId"(): StringJS
 "getType"(): StringJS
 "getScope"(): StringJS
 "isResolved"(): boolean
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): StringJS
 "isSnapshot"(): boolean
 "isOptional"(): boolean
 "setFile"(arg0: $File$$Type): void
 "getGroupId"(): StringJS
 "isSelectedVersionKnown"(): boolean
 "setVersion"(arg0: StringJS): void
 "getRepository"(): $ArtifactRepository
 "getArtifactId"(): StringJS
 "getDependencyTrail"(): $List<(StringJS)>
 "getSelectedVersion"(): $ArtifactVersion
 "getClassifier"(): StringJS
 "getVersionRange"(): $VersionRange
 "setScope"(arg0: StringJS): void
 "getDependencyConflictId"(): StringJS
 "getDependencyFilter"(): $ArtifactFilter
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "setGroupId"(arg0: StringJS): void
 "isRelease"(): boolean
 "setBaseVersion"(arg0: StringJS): void
 "getBaseVersion"(): StringJS
 "updateVersion"(arg0: StringJS, arg1: $ArtifactRepository$$Type): void
 "selectVersion"(arg0: StringJS): void
 "setResolved"(arg0: boolean): void
 "setResolvedVersion"(arg0: StringJS): void
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "setArtifactId"(arg0: StringJS): void
 "setOptional"(arg0: boolean): void
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "hasClassifier"(): boolean
 "getDownloadUrl"(): StringJS
 "getArtifactHandler"(): $ArtifactHandler
 "setDownloadUrl"(arg0: StringJS): void
 "setDependencyTrail"(arg0: $List$$Type<(StringJS)>): void
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "compareTo"(arg0: $Artifact$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Artifact$$Type = ($Artifact);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Artifact$$Original = $Artifact;}
declare module "org.apache.maven.artifact.versioning.VersionRange" {
import {$Restriction} from "org.apache.maven.artifact.versioning.Restriction"
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$List, $List$$Type} from "java.util.List"
import {$Artifact$$Type} from "org.apache.maven.artifact.Artifact"

export class $VersionRange {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "cloneOf"(): $VersionRange
public "restrict"(arg0: $VersionRange$$Type): $VersionRange
public static "createFromVersionSpec"(arg0: StringJS): $VersionRange
public "getRecommendedVersion"(): $ArtifactVersion
public "isSelectedVersionKnown"(arg0: $Artifact$$Type): boolean
public "matchVersion"(arg0: $List$$Type<($ArtifactVersion$$Type)>): $ArtifactVersion
public "getSelectedVersion"(arg0: $Artifact$$Type): $ArtifactVersion
public static "createFromVersion"(arg0: StringJS): $VersionRange
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "getRestrictions"(): $List<($Restriction)>
public "hasRestrictions"(): boolean
get "recommendedVersion"(): $ArtifactVersion
get "restrictions"(): $List<($Restriction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VersionRange$$Type = ($VersionRange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VersionRange$$Original = $VersionRange;}
