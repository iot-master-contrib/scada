package scada

import (
	"embed"
	"encoding/json"
	"github.com/iot-master-contrib/scada/api"
	_ "github.com/iot-master-contrib/scada/docs"
	"github.com/iot-master-contrib/scada/types"
	"github.com/zgwit/iot-master/v3/model"
	"github.com/zgwit/iot-master/v3/pkg/db"
	"github.com/zgwit/iot-master/v3/pkg/mqtt"
	"github.com/zgwit/iot-master/v3/pkg/web"
	"net/http"
)

func App() *model.App {
	return &model.App{
		Id:   "scada",
		Name: "所有组态",
		Entries: []model.AppEntry{{
			Path: "app/scada/admin/project",
			Name: "所有工程",
		}, {
			Path: "app/scada/admin/component",
			Name: "所有组件",
		}, {
			Path: "app/scada/admin/project",
			Name: "所有集合",
		}},
		Type:    "tcp",
		Address: "http://localhost" + web.GetOptions().Addr,
	}
}

//go:embed all:app/scada
var wwwFiles embed.FS

// @title 组态接口文档
// @version 1.0 版本
// @description API文档
// @BasePath /app/scada/api/
// @query.collection.format multi
func main() {
}

func Sync() error {
	return db.Engine.Sync2(
		new(types.HmiProject),
		new(types.HmiComponent),
		new(types.HmiHtml),
		new(types.HmiPath),
		new(types.HmiImage),
	)
}

func Route(app *web.Engine) {

	//注册前端接口
	api.RegisterRoutes(app.Group("/app/scada/api"))

	//注册接口文档
	web.RegisterSwaggerDocs(app.Group("/app/scada"), "scada")
}

func Register() error {
	payload, _ := json.Marshal(App())
	return mqtt.Publish("master/register", payload, false, 0)
}

func Static(fs *web.FileSystem) {
	//前端静态文件
	fs.Put("/app/scada", http.FS(wwwFiles), "", "app/scada/index.html")
}

func Shutdown() error {

	//只关闭Web就行了，其他通过defer关闭

	return nil
}
