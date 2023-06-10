package api

import (
	"github.com/gin-gonic/gin"
	"github.com/iot-master-contrib/scada/types"
	"github.com/zgwit/iot-master/v3/pkg/curd"
)

// @Summary 查询图片组件数量
// @Schemes
// @Description 查询图片组件数量
// @Tags image
// @Param search body ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[int64] 返回图片组件数量
// @Router /image/count [post]
func noopImageCount() {}

// @Summary 查询图片组件
// @Schemes
// @Description 查询图片组件
// @Tags image
// @Param search body ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyList[types.HmiImage] 返回图片组件信息
// @Router /image/search [post]
func noopImageSearch() {}

// @Summary 查询图片组件
// @Schemes
// @Description 查询图片组件
// @Tags image
// @Param search query ParamList true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyList[types.HmiImage] 返回图片组件信息
// @Router /image/list [get]
func noopImageList() {}

// @Summary 创建图片组件
// @Schemes
// @Description 创建图片组件
// @Tags image
// @Param search body types.HmiImage true "图片组件信息"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiImage] 返回图片组件信息
// @Router /image/create [post]
func noopHmiImageCreate() {}

// @Summary 获取图片组件
// @Schemes
// @Description 获取图片组件
// @Tags image
// @Param id path int true "图片组件ID"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiImage] 返回图片组件信息
// @Router /image/{id} [get]
func noopImageGet() {}

// @Summary 修改图片组件
// @Schemes
// @Description 修改图片组件
// @Tags image
// @Param id path int true "图片组件ID"
// @Param image body types.HmiImage true "图片组件信息"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiImage] 返回图片组件信息
// @Router /image/{id} [post]
func noopImageUpdate() {}

// @Summary 删除图片组件
// @Schemes
// @Description 删除图片组件
// @Tags image
// @Param id path int true "图片组件ID"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiImage] 返回图片组件信息
// @Router /image/{id}/delete [get]
func noopHmiImageDelete() {}

// @Summary 导出图片组件
// @Schemes
// @Description 导出图片组件
// @Tags product
// @Accept json
// @Produce octet-stream
// @Router /image/export [get]
func noopHmiImageExport() {}

// @Summary 导入图片组件
// @Schemes
// @Description 导入图片组件
// @Tags product
// @Param file formData file true "压缩包"
// @Accept mpfd
// @Produce json
// @Success 200 {object} ReplyData[int64] 返回图片组件数量
// @Router /image/import [post]
func noopHmiImageImport() {}

func imageRouter(app *gin.RouterGroup) {

	app.POST("/count", curd.ApiCount[types.HmiImage]())

	app.POST("/search", curd.ApiSearch[types.HmiImage]("id", "name", "url", "collection", "version", "updated", "created"))

	app.GET("/list", curd.ApiList[types.HmiImage]("id", "name", "url", "collection", "version", "updated", "created"))

	app.POST("/create", curd.ApiCreateHook[types.HmiImage](curd.GenerateRandomId[types.HmiImage](12), nil))

	app.GET("/:id", curd.ParseParamStringId, curd.ApiGet[types.HmiImage]())

	app.POST("/:id", curd.ParseParamStringId, curd.ApiUpdateHook[types.HmiImage](nil, nil,
		"id", "name", "url", "collection"))

	app.GET("/:id/delete", curd.ParseParamStringId, curd.ApiDelete[types.HmiImage]())

	app.GET("/export", curd.ApiExport("hmi_image", "hmi_image"))

	app.POST("/import", curd.ApiImport("hmi_image"))

}
