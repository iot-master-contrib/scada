package types

import "time"

type HmiPath struct {
	Id         string    `json:"id,omitempty" xorm:"pk"`
	Name       string    `json:"name,omitempty"`
	Icon       string    `json:"icon,omitempty"`
	Path       string    `json:"path,omitempty"`
	Collection string    `json:"collection,omitempty" xorm:"index"`
	Updated    time.Time `json:"updated" xorm:"updated"`
	Created    time.Time `json:"created" xorm:"created"`
}
