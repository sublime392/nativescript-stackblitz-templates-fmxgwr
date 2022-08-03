import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { TouchManager, CoreTypes } from '@nativescript/core';
import { AppModule } from './app/app.module';

TouchManager.enableGlobalTapAnimations = true;
TouchManager.animations = {
  down: {
    scale: { x: 0.95, y: 0.95 },
    duration: 120,
    curve: CoreTypes.AnimationCurve.easeInOut
  },
  up: {
    scale: { x: 1, y: 1 },
    duration: 120,
    curve: CoreTypes.AnimationCurve.easeInOut
  }
};
runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

