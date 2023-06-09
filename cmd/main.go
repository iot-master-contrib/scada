package main

import (
    "github.com/iot-master-contrib/scada"
    "github.com/iot-master-contrib/scada/config"
    "github.com/zgwit/iot-master/v3/pkg/banner"
    "github.com/zgwit/iot-master/v3/pkg/build"
    "github.com/zgwit/iot-master/v3/pkg/db"
    "github.com/zgwit/iot-master/v3/pkg/log"
    "github.com/zgwit/iot-master/v3/pkg/web"
)

func main() {
    banner.Print("iot-master-plugin:scada")
    build.Print()

    config.Load()

    err := log.Open()
    if err != nil {
        log.Fatal(err)
    }

    //加载数据库
    err = db.Open()
    if err != nil {
        log.Fatal(err)
    }

    err = scada.Sync()
    if err != nil {
        log.Fatal(err)
    }

    //MQTT总线
    //err = mqtt.Open()
    //if err != nil {
    //	log.Fatal(err)
    //}

    //err = scada.Register()
    //if err != nil {
    //	log.Fatal(err)
    //}

    app := web.CreateEngine()

    //调用启动
    scada.Route(app)

    //注册静态页面
    fs := app.FileSystem()
    scada.Static(fs)

    //监听HTTP
    app.Serve()
}
