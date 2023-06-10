package types

import "time"

type HmiImage struct {
	Id         string    `json:"id,omitempty" xorm:"pk"`
	Name       string    `json:"name,omitempty"`
	Url        string    `json:"url,omitempty"`
	Collection string    `json:"collection,omitempty" xorm:"index"`
	Updated    time.Time `json:"updated" xorm:"updated"`
	Created    time.Time `json:"created" xorm:"created"`
}
