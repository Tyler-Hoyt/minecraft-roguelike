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
get "blacklisted"(): boolean
set "releaseUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
get "mirroredRepositories"(): $List<($ArtifactRepository)>
set "snapshotUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
set "mirroredRepositories"(value: $List$$Type<($ArtifactRepository$$Type)>)
get "uniqueVersion"(): boolean
set "blacklisted"(value: boolean)
get "projectAware"(): boolean
set "authentication"(value: $Authentication$$Type)
get "authentication"(): $Authentication
get "snapshots"(): $ArtifactRepositoryPolicy
get "releases"(): $ArtifactRepositoryPolicy
get "layout"(): $ArtifactRepositoryLayout
set "layout"(value: $ArtifactRepositoryLayout$$Type)
set "blocked"(value: boolean)
get "url"(): StringJS
set "id"(value: StringJS)
get "proxy"(): $Proxy
get "blocked"(): boolean
set "proxy"(value: $Proxy$$Type)
set "url"(value: StringJS)
get "basedir"(): StringJS
}

export class $ArtifactRepository implements $ArtifactRepository$$Interface {
 "getKey"(): StringJS
 "find"(arg0: $Artifact$$Type): $Artifact
 "getId"(): StringJS
 "getProtocol"(): StringJS
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "setMirroredRepositories"(arg0: $List$$Type<($ArtifactRepository$$Type)>): void
/**
 * 
 * @deprecated
 */
 "isUniqueVersion"(): boolean
/**
 * 
 * @deprecated
 */
 "setBlacklisted"(arg0: boolean): void
 "isProjectAware"(): boolean
 "setAuthentication"(arg0: $Authentication$$Type): void
 "findVersions"(arg0: $Artifact$$Type): $List<(StringJS)>
 "getAuthentication"(): $Authentication
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "getReleases"(): $ArtifactRepositoryPolicy
 "getLayout"(): $ArtifactRepositoryLayout
 "setLayout"(arg0: $ArtifactRepositoryLayout$$Type): void
 "setBlocked"(arg0: boolean): void
 "getUrl"(): StringJS
 "setId"(arg0: StringJS): void
 "getProxy"(): $Proxy
 "isBlocked"(): boolean
 "setProxy"(arg0: $Proxy$$Type): void
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$$Type, arg1: $ArtifactRepository$$Type): StringJS
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$$Type): StringJS
 "setUrl"(arg0: StringJS): void
 "getBasedir"(): StringJS
 "pathOf"(arg0: $Artifact$$Type): StringJS
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
declare module "org.apache.maven.artifact.versioning.ArtifactVersion" {
import {$Comparable$$Interface} from "java.lang.Comparable"

export interface $ArtifactVersion$$Interface extends $Comparable$$Interface<($ArtifactVersion)> {
get "majorVersion"(): integer
get "minorVersion"(): integer
get "incrementalVersion"(): integer
get "buildNumber"(): integer
get "qualifier"(): StringJS
}

export class $ArtifactVersion implements $ArtifactVersion$$Interface {
 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "getIncrementalVersion"(): integer
 "getBuildNumber"(): integer
 "getQualifier"(): StringJS
 "parseVersion"(arg0: StringJS): void
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
get "includesDependencies"(): boolean
get "addedToClasspath"(): boolean
get "packaging"(): StringJS
get "directory"(): StringJS
get "classifier"(): StringJS
}

export class $ArtifactHandler implements $ArtifactHandler$$Interface {
static readonly "ROLE": StringJS

 "getLanguage"(): StringJS
 "getExtension"(): StringJS
 "isIncludesDependencies"(): boolean
 "isAddedToClasspath"(): boolean
 "getPackaging"(): StringJS
 "getDirectory"(): StringJS
 "getClassifier"(): StringJS
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
declare module "org.apache.maven.artifact.versioning.Restriction" {
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"

export class $Restriction {
static readonly "EVERYTHING": $Restriction

constructor(arg0: $ArtifactVersion$$Type, arg1: boolean, arg2: $ArtifactVersion$$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isUpperBoundInclusive"(): boolean
public "isLowerBoundInclusive"(): boolean
public "getLowerBound"(): $ArtifactVersion
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "getUpperBound"(): $ArtifactVersion
get "upperBoundInclusive"(): boolean
get "lowerBoundInclusive"(): boolean
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
declare module "org.apache.maven.artifact.metadata.ArtifactMetadata" {
import {$ArtifactRepository$$Type} from "org.apache.maven.artifact.repository.ArtifactRepository"
import {$ArtifactMetadata$$Type as $ArtifactMetadata$0$$Type, $ArtifactMetadata$$Interface as $ArtifactMetadata$0$$Interface} from "org.apache.maven.repository.legacy.metadata.ArtifactMetadata"

/**
 * 
 * @deprecated
 */
export interface $ArtifactMetadata$$Interface extends $ArtifactMetadata$0$$Interface {
get "key"(): any
get "baseVersion"(): StringJS
get "remoteFilename"(): StringJS
get "groupId"(): StringJS
get "artifactId"(): StringJS
}

export class $ArtifactMetadata implements $ArtifactMetadata$$Interface {
 "merge"(arg0: $ArtifactMetadata$$Type): void
 "merge"(arg0: $ArtifactMetadata$0$$Type): void
 "getKey"(): any
 "storedInGroupDirectory"(): boolean
 "storeInLocalRepository"(arg0: $ArtifactRepository$$Type, arg1: $ArtifactRepository$$Type): void
 "getBaseVersion"(): StringJS
 "getLocalFilename"(arg0: $ArtifactRepository$$Type): StringJS
 "getRemoteFilename"(): StringJS
 "extendedToString"(): StringJS
 "getGroupId"(): StringJS
 "getArtifactId"(): StringJS
 "storedInArtifactVersionDirectory"(): boolean
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
get "dependencyFilter"(): $ArtifactFilter
get "availableVersions"(): $List<($ArtifactVersion)>
set "dependencyFilter"(value: $ArtifactFilter$$Type)
set "availableVersions"(value: $List$$Type<($ArtifactVersion$$Type)>)
get "dependencyConflictId"(): StringJS
set "version"(value: StringJS)
set "scope"(value: StringJS)
set "baseVersion"(value: StringJS)
get "baseVersion"(): StringJS
set "repository"(value: $ArtifactRepository$$Type)
set "optional"(value: boolean)
set "resolvedVersion"(value: StringJS)
get "downloadUrl"(): StringJS
set "artifactHandler"(value: $ArtifactHandler$$Type)
set "versionRange"(value: $VersionRange$$Type)
set "artifactId"(value: StringJS)
set "dependencyTrail"(value: $List$$Type<(StringJS)>)
set "downloadUrl"(value: StringJS)
get "metadataList"(): $Collection<($ArtifactMetadata)>
set "resolved"(value: boolean)
get "artifactHandler"(): $ArtifactHandler
get "dependencyTrail"(): $List<(StringJS)>
get "versionRange"(): $VersionRange
get "repository"(): $ArtifactRepository
get "selectedVersionKnown"(): boolean
get "groupId"(): StringJS
get "selectedVersion"(): $ArtifactVersion
get "artifactId"(): StringJS
get "classifier"(): StringJS
set "file"(value: $File$$Type)
get "optional"(): boolean
get "snapshot"(): boolean
get "release"(): boolean
set "groupId"(value: StringJS)
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
 "getDependencyFilter"(): $ArtifactFilter
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "getDependencyConflictId"(): StringJS
 "setVersion"(arg0: StringJS): void
 "setScope"(arg0: StringJS): void
 "setBaseVersion"(arg0: StringJS): void
 "getBaseVersion"(): StringJS
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "setOptional"(arg0: boolean): void
 "setResolvedVersion"(arg0: StringJS): void
 "hasClassifier"(): boolean
 "getDownloadUrl"(): StringJS
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "selectVersion"(arg0: StringJS): void
 "updateVersion"(arg0: StringJS, arg1: $ArtifactRepository$$Type): void
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "setArtifactId"(arg0: StringJS): void
 "setDependencyTrail"(arg0: $List$$Type<(StringJS)>): void
 "setDownloadUrl"(arg0: StringJS): void
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "setResolved"(arg0: boolean): void
 "getArtifactHandler"(): $ArtifactHandler
 "getDependencyTrail"(): $List<(StringJS)>
 "getVersionRange"(): $VersionRange
 "getRepository"(): $ArtifactRepository
 "isSelectedVersionKnown"(): boolean
 "getGroupId"(): StringJS
 "getSelectedVersion"(): $ArtifactVersion
 "getArtifactId"(): StringJS
 "getClassifier"(): StringJS
 "setFile"(arg0: $File$$Type): void
 "isOptional"(): boolean
 "isSnapshot"(): boolean
 "isRelease"(): boolean
 "setGroupId"(arg0: StringJS): void
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
public static "createFromVersionSpec"(arg0: StringJS): $VersionRange
public "getRestrictions"(): $List<($Restriction)>
public "getRecommendedVersion"(): $ArtifactVersion
public "isSelectedVersionKnown"(arg0: $Artifact$$Type): boolean
public "getSelectedVersion"(arg0: $Artifact$$Type): $ArtifactVersion
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "hasRestrictions"(): boolean
public static "createFromVersion"(arg0: StringJS): $VersionRange
public "matchVersion"(arg0: $List$$Type<($ArtifactVersion$$Type)>): $ArtifactVersion
public "restrict"(arg0: $VersionRange$$Type): $VersionRange
/**
 * 
 * @deprecated
 */
public "cloneOf"(): $VersionRange
get "restrictions"(): $List<($Restriction)>
get "recommendedVersion"(): $ArtifactVersion
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
