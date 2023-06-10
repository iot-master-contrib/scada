package api

import (
	"github.com/gin-gonic/gin"
	"github.com/iot-master-contrib/scada/types"
	"github.com/zgwit/iot-master/v3/pkg/curd"
)

// @Summary 查询路径组件数量
// @Schemes
// @Description 查询路径组件数量
// @Tags path
// @Param search body ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[int64] 返回路径组件数量
// @Router /path/count [post]
func noopPathCount() {}

// @Summary 查询路径组件
// @Schemes
// @Description 查询路径组件
// @Tags path
// @Param search body ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyList[types.HmiPath] 返回路径组件信息
// @Router /path/search [post]
func noopPathSearch() {}

// @Summary 查询路径组件
// @Schemes
// @Description 查询路径组件
// @Tags path
// @Param search query ParamList true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyList[types.HmiPath] 返回路径组件信息
// @Router /path/list [get]
func noopPathList() {}

// @Summary 创建路径组件
// @Schemes
// @Description 创建路径组件
// @Tags path
// @Param search body types.HmiPath true "路径组件信息"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiPath] 返回路径组件信息
// @Router /path/create [post]
func noopHmiPathCreate() {}

// @Summary 获取路径组件
// @Schemes
// @Description 获取路径组件
// @Tags path
// @Param id path int true "路径组件ID"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiPath] 返回路径组件信息
// @Router /path/{id} [get]
func noopPathGet() {}

// @Summary 修改路径组件
// @Schemes
// @Description 修改路径组件
// @Tags path
// @Param id path int true "路径组件ID"
// @Param path body types.HmiPath true "路径组件信息"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiPath] 返回路径组件信息
// @Router /path/{id} [post]
func noopPathUpdate() {}

// @Summary 删除路径组件
// @Schemes
// @Description 删除路径组件
// @Tags path
// @Param id path int true "路径组件ID"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiPath] 返回路径组件信息
// @Router /path/{id}/delete [get]
func noopHmiPathDelete() {}

// @Summary 导出路径组件
// @Schemes
// @Description 导出路径组件
// @Tags product
// @Accept json
// @Produce octet-stream
// @Router /path/export [get]
func noopHmiPathExport() {}

// @Summary 导入路径组件
// @Schemes
// @Description 导入路径组件
// @Tags product
// @Param file formData file true "压缩包"
// @Accept mpfd
// @Produce json
// @Success 200 {object} ReplyData[int64] 返回路径组件数量
// @Router /path/import [post]
func noopHmiPathImport() {}

func pathRouter(app *gin.RouterGroup) {

	app.POST("/count", curd.ApiCount[types.HmiPath]())

	app.POST("/search", curd.ApiSearch[types.HmiPath]("id", "name", "icon", "path", "collection", "version", "updated", "created"))

	app.GET("/list", curd.ApiList[types.HmiPath]("id", "name", "icon", "path", "collection", "version", "updated", "created"))

	app.POST("/create", curd.ApiCreateHook[types.HmiPath](curd.GenerateRandomId[types.HmiPath](12), nil))

	app.GET("/:id", curd.ParseParamStringId, curd.ApiGet[types.HmiPath]())

	app.POST("/:id", curd.ParseParamStringId, curd.ApiUpdateHook[types.HmiPath](nil, nil,
		"id", "name", "icon", "path", "collection"))

	app.GET("/:id/delete", curd.ParseParamStringId, curd.ApiDelete[types.HmiPath]())

	app.GET("/export", curd.ApiExport("hmi_path", "hmi_path"))

	app.POST("/import", curd.ApiImport("hmi_path"))

}
