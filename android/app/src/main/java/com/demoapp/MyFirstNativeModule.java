package com.demoapp;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyFirstNativeModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    MyFirstNativeModule(ReactApplicationContext context){
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "FirstNativeModule";
    }

    @ReactMethod
    public void showToastMessage(String msg, int duration) {
        Toast.makeText(getReactApplicationContext(), msg, duration);
    }
}