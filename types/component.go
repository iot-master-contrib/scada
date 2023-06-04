package types

import "time"

type HmiComponent struct {
	Id         string        `json:"id,omitempty" xorm:"pk"`
	Name       string        `json:"name,omitempty"`
	Icon       string        `json:"icon,omitempty"`
	Type       string        `json:"type,omitempty"`
	Meta       any           `json:"meta,omitempty" xorm:"json"`
	Properties []HmiProperty `json:"properties,omitempty"`
	Collection string        `json:"collection,omitempty" xorm:"index"`
	Version    int           `json:"version,omitempty" xorm:"version"`
	Updated    time.Time     `json:"updated" xorm:"updated"`
	Created    time.Time     `json:"created" xorm:"created"`
}

type HmiProperty struct {
	Name    string              `json:"name,omitempty"`
	Path    string              `json:"path,omitempty"`
	Type    string              `json:"type,omitempty"`
	Default any                 `json:"default,omitempty"`
	Options []HmiPropertyOption `json:"options,omitempty"`
	Max     int                 `json:"max,omitempty"`
	Min     int                 `json:"min,omitempty"`
	Step    int                 `json:"step,omitempty"`
}

type HmiPropertyOption struct {
	Name  string `json:"name,omitempty"`
	Value any    `json:"value,omitempty"`
}
