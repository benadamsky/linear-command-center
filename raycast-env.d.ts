/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Preferred Team Key - Optional team key used to filter the dashboard and preselect Quick Capture. Leave blank for all assigned work. */
  "teamKey"?: string,
  /** Agent Project ID - Optional exact project UUID used to highlight agent work */
  "agentProjectId"?: string,
  /** Agent Project Keywords - Comma-separated project-name keywords used to recognize agent work in addition to Linear delegation and agent sessions */
  "agentProjectKeywords": string,
  /** Review Status Names - Optional comma-separated review statuses. When blank, statuses containing ‘review’ are detected automatically. */
  "reviewStateNames"?: string,
  /** Stale After - Hours without an update before active work is considered stale */
  "staleAfterHours": string,
  /** Menu Items per Section - Maximum issues shown in each menu-bar section */
  "menuItemLimit": string,
  /** Demo Data - Show sanitized sample work for previews and screenshots instead of loading Linear data */
  "demoMode": boolean
}
/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `linear-pulse` command */
  export type LinearPulse = ExtensionPreferences & {}
  /** Preferences accessible in the `work-dashboard` command */
  export type WorkDashboard = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-capture` command */
  export type QuickCapture = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `linear-pulse` command */
  export type LinearPulse = {}
  /** Arguments passed to the `work-dashboard` command */
  export type WorkDashboard = {}
  /** Arguments passed to the `quick-capture` command */
  export type QuickCapture = {}
}
