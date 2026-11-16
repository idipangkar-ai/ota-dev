package com.ota

import android.app.Application
import java.io.File

import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost

class MainApplication : Application(), ReactApplication {

  override val reactHost: ReactHost by lazy {
    val updateBundle = File(
      applicationContext.filesDir,
      "ota/active/index.android.bundle"
    )

    getDefaultReactHost(
      context = applicationContext,
      packageList = PackageList(this).packages,
      jsBundleFilePath = if (BuildConfig.DEBUG) {
        null
      } else {
        updateBundle.takeIf { it.exists() }?.absolutePath
      },
    )
  }

  override fun onCreate() {
    super.onCreate()
    loadReactNative(this)
  }
}
