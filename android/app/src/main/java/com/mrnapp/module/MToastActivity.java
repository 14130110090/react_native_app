package com.mrnapp.module;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MToastActivity extends ReactContextBaseJavaModule {
    private ReactApplicationContext reactContext;

    public MToastActivity(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @ReactMethod
    public void showToast(String msg) {
        Toast.makeText(reactContext, msg, Toast.LENGTH_LONG).show();

    }

    @NonNull
    @Override
    public String getName() {
        return "MToastActivity";
    }
}